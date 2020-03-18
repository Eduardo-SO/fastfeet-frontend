import React, { useState } from 'react';
import { MdAdd, MdSearch, MdCreate, MdDeleteForever } from 'react-icons/md';

// import api from '~/services/api';
import { Container, Header, InputContainer } from './styles';
import { Table, Actions, ActionsList } from '~/components/Table/styles';

export default function Deliveries() {
    const [actionsVisible, setActionsVisible] = useState(false);
    // const [modalVisible, setModalVisible] = useState(false);

    function handleActionsVisibility() {
        setActionsVisible(!actionsVisible);

        return actionsVisible;
    }

    // function handleModalVisibility() {
    //     setModalVisible(!modalVisible);

    //     return modalVisible;
    // }

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
                    <tr>
                        <td>#01</td>
                        <td>Ludwig van Beethoven</td>
                        <td>Gaspar Antunes</td>
                        <td>Rio do Sul</td>
                        <td>Santa Catarina</td>
                        <td>ENTREGUEEE</td>
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
