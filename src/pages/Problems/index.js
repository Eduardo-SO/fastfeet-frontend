import React from 'react';
import { MdCreate, MdDeleteForever } from 'react-icons/md';

import { Container, Header } from './styles';
import Table from '~/components/Table';
import Actions from '~/components/Actions';

export default function Problems() {
    return (
        <Container>
            <Header>
                <h1>Gerenciando problemas</h1>
            </Header>

            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Foto</th>
                        <th>Nome</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>#01</td>
                        <td>John Doe</td>
                        <td>example@rocketseat.com.br</td>
                        <Actions>
                            <li>
                                <MdCreate color="#4D85EE" size={16} />
                                Editar
                            </li>
                            <li>
                                <MdDeleteForever color="#DE3B3B" size={16} />
                                Excluir
                            </li>
                        </Actions>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}
