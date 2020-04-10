import React from 'react';
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

// import {  } from '~/store/modules/auth/actions'

import { Container } from './styles';
import logo from '~/assets/img/fastfeet-logo.svg';

export default function Header() {
    // const dispacth = useDispatch();

    function logout() {}

    return (
        <Container>
            <img src={logo} alt="FastFeet Logo" />
            <nav>
                <Link to="/deliveries">ENCOMENDAS</Link>
                <Link to="/deliverymen">ENTREGADORES</Link>
                <Link to="/recipients">DESTINATÁRIOS</Link>
                <Link to="/problems">PROBLEMAS</Link>
            </nav>
            <div id="user">
                <strong>Admin FastFeet</strong>
                <button type="button" onClick={logout}>
                    Sair do Sitema
                </button>
            </div>
        </Container>
    );
}
