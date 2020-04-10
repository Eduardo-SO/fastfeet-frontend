import React, { useState, useEffect } from 'react';
import { MdAdd, MdSearch, MdCreate, MdDeleteForever } from 'react-icons/md';

import api from '~/services/api';

import { Container, Header, InputContainer } from './styles';
import Table from '~/components/Table';
import Actions from '~/components/Actions';

export default function Deliverymen() {
    const [deliverymen, setDeliverymen] = useState([]);

    useEffect(() => {
        async function loadDeliverymen() {
            const response = await api.get('deliveryman');
            setDeliverymen(response.data);
        }

        loadDeliverymen();
    }, []);

    return (
        <Container>
            <Header>
                <h1>Gerenciando entregadores</h1>
                <nav>
                    <InputContainer>
                        <MdSearch size={23} />
                        <input placeholder="Buscar por Entregadores" />
                    </InputContainer>
                    <button type="button">
                        <MdAdd size={26} />
                        CADASTRAR
                    </button>
                </nav>
            </Header>

            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Foto</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {deliverymen.map(deliveryman => (
                        <tr key={deliveryman.id}>
                            <td>{deliveryman.id}</td>
                            <td>__JD__</td>
                            <td>{deliveryman.name}</td>
                            <td>{deliveryman.email}</td>
                            <Actions>
                                <li>
                                    <MdCreate color="#4D85EE" size={16} />
                                    Editar
                                </li>
                                <li>
                                    <MdDeleteForever
                                        color="#DE3B3B"
                                        size={16}
                                    />
                                    Excluir
                                </li>
                            </Actions>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}
