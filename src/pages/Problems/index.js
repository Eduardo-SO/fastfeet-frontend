import React, { useEffect, useState } from 'react';
import { MdCreate, MdDeleteForever } from 'react-icons/md';

import api from '~/services/api';
import { Container, Header } from './styles';
import Table from '~/components/Table';
import Actions from '~/components/Actions';
import Modal from './Modal';

export default function Problems() {
    const [problems, setProblems] = useState([]);

    useEffect(() => {
        async function loadProblems() {
            const response = await api.get('deliveries/problems');

            setProblems(response.data);
        }

        loadProblems();
    }, []);

    return (
        <Container>
            <Header>
                <h1>Problemas na entrega</h1>
            </Header>

            <Table>
                <thead>
                    <tr>
                        <th>Encomenda</th>
                        <th>Problema</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {problems.map(problem => (
                        <tr>
                            <td>#{problem.delivery_id}</td>
                            <td className="big-text">{problem.description}</td>
                            <Actions>
                                <li>
                                    <Modal problem={problem}>
                                        <MdCreate color="#4D85EE" size={16} />
                                        Visualizar
                                    </Modal>
                                </li>
                                <li>
                                    <MdDeleteForever
                                        color="#DE3B3B"
                                        size={16}
                                    />
                                    Cancelar Encomenda
                                </li>
                            </Actions>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}
