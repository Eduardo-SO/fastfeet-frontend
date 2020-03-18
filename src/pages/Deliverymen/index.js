import React, { useState } from 'react';
import { MdAdd, MdSearch, MdCreate, MdDeleteForever } from 'react-icons/md';

import { Container, Header, InputContainer } from './styles';
import { Table, Actions, ActionsList } from '~/components/Table/styles';

export default function Deliverymen() {
    const [actionsVisible, setActionsVisible] = useState(false);

    function handleActionsVisibility() {
        setActionsVisible(!actionsVisible);

        return actionsVisible;
    }
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
                    <tr>
                        <td>#01</td>
                        <td>__JD__</td>
                        <td>John Doe</td>
                        <td>example@rocketseat.com.br</td>
                        <Actions>
                            <button
                                type="button"
                                onClick={handleActionsVisibility}
                            >
                                • • •
                            </button>
                            <ActionsList visible={actionsVisible}>
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
                            </ActionsList>
                        </Actions>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}
