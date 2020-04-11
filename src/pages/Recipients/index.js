import React, { useState, useEffect } from 'react';
import { MdAdd, MdSearch, MdCreate, MdDeleteForever } from 'react-icons/md';
import { Link } from 'react-router-dom';

import api from '~/services/api';
import { Container, Header, InputContainer } from './styles';
import Table from '~/components/Table';
import Actions from '~/components/Actions';

export default function Recipients() {
    const [recipients, setRecipients] = useState([]);

    useEffect(() => {
        async function loadRecipients() {
            const response = await api.get('recipients');
            setRecipients(response.data);
        }

        loadRecipients();
    }, []);

    async function handleDelete(id) {
        await api.delete(`recipients/${id}`);

        setRecipients(recipients.filter(recipient => recipient.id !== id));
    }

    return (
        <Container>
            <Header>
                <h1>Gerenciando destinatários</h1>
                <nav>
                    <InputContainer>
                        <MdSearch size={23} />
                        <input placeholder="Buscar por Destinatários" />
                    </InputContainer>
                    <Link to="/recipients/register">
                        <MdAdd size={26} />
                        CADASTRAR
                    </Link>
                </nav>
            </Header>

            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Endereço</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {recipients.map(recipient => (
                        <tr>
                            <td>{recipient.id}</td>
                            <td>{recipient.name}</td>
                            <td>
                                {recipient.street}, {recipient.number},{' '}
                                {recipient.city} - {recipient.state}
                            </td>
                            <Actions>
                                <li>
                                    <MdCreate color="#4D85EE" size={16} />
                                    Editar
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleDelete(recipient.id)
                                        }
                                    >
                                        <MdDeleteForever
                                            color="#DE3B3B"
                                            size={16}
                                        />
                                        Excluir
                                    </button>
                                </li>
                            </Actions>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}
