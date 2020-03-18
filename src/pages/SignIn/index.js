import React from 'react';

import { Container } from './styles';

import logo from '~/assets/img/fastfeet-logo.svg';

export default function SignIn() {
    return (
        <Container>
            <img src={logo} alt="Logo FastFeet" />

            <form>
                <span>SEU E-MAIL</span>
                <input type="text" placeholder="exemplo@email.com" />

                <span>SUA SENHA</span>
                <input type="text" placeholder="*************" />

                <button type="button">Entrar no sistema</button>
            </form>
        </Container>
    );
}
