import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    MdAdd,
    MdSearch,
    MdCreate,
    MdDeleteForever,
    MdVisibility,
} from 'react-icons/md';

import api from '~/services/api';

import { Container, Header, InputContainer } from './styles';

import Table from '~/components/Table';
import Actions from '~/components/Actions';
import Status from '~/components/Status';
import Modal from './Modal';

export default function Deliveries() {
    const [deliveries, setDeliveries] = useState([]);

    useEffect(() => {
        async function loadDeliveries() {
            const response = await api.get('deliveries');

            setDeliveries(response.data);
        }

        loadDeliveries();
    }, []);

    return (
        <Container>
            <Header>
                <h1>Gerenciando encomendas</h1>
                <nav>
                    <InputContainer>
                        <MdSearch size={23} />
                        <input placeholder="Buscar por encomendas" />
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
                        <th>Destinatário</th>
                        <th>Entregador</th>
                        <th>Cidade</th>
                        <th>Estado</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {deliveries.map(delivery => (
                        <tr key={delivery.id}>
                            <td>{delivery.id}</td>
                            <td>{delivery.recipient.name}</td>
                            <td>{delivery.deliveryman.name}</td>
                            <td>{delivery.recipient.city}</td>
                            <td>{delivery.recipient.state}</td>
                            <td>
                                <Status delivery={delivery} />
                            </td>
                            <Actions>
                                <li>
                                    <Modal delivery={delivery}>
                                        <MdVisibility
                                            color="#8E5BE8"
                                            size={16}
                                        />
                                        Visualizar
                                    </Modal>
                                </li>
                                <li>
                                    <Link to="/deliverymen">
                                        <MdCreate color="#4D85EE" size={16} />
                                        Editar
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/deliverymen">
                                        <MdDeleteForever
                                            color="#DE3B3B"
                                            size={16}
                                        />
                                        Excluir
                                    </Link>
                                </li>
                            </Actions>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}
