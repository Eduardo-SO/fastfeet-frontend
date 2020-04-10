import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { signInRequest } from '~/store/modules/auth/actions';
import { Container } from './styles';
import logo from '~/assets/img/fastfeet-logo.svg';

export default function SignIn() {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth.loading);

    function handleSubmit({ email, password }) {
        dispatch(signInRequest(email, password));
    }

    return (
        <Container>
            <img src={logo} alt="Logo FastFeet" />

            <Form onSubmit={handleSubmit}>
                <span>SEU E-MAIL</span>
                <Input
                    name="email"
                    type="text"
                    placeholder="exemplo@email.com"
                />

                <span>SUA SENHA</span>
                <Input
                    name="password"
                    type="password"
                    placeholder="*************"
                />

                <button type="submit">
                    {loading ? 'Carregando' : 'Entrar no sistema'}
                </button>
            </Form>
        </Container>
    );
}
