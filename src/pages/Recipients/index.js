import React, { useState } from 'react';
import { MdAdd, MdSearch, MdCreate, MdDeleteForever } from 'react-icons/md';

// import api from '~/services/api';

import { Container, Header, InputContainer } from './styles';
import { Table, Actions, ActionsList } from '~/components/Table/styles';

export default function Recipients() {
    const [actionsVisible, setActionsVisible] = useState(false);

    // const [recipients, setRecipients] = useState([]);

    // useEffect(() => {
    //     async function loadRecipients() {
    //         const data = await api.get('recipients');
    //         setRecipients(data);

    //         console.log(data);
    //         return data;
    //     }

    //     loadRecipients();
    // }, []);

    function handleActionsVisibility() {
        setActionsVisible(!actionsVisible);

        return actionsVisible;
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
                        <th>Nome</th>
                        <th>Endereço</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>#01</td>
                        <td>Ludwig Van Chopin</td>
                        <td>Rua Beethoven, 1729, Diadema - São Paulo</td>
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
