import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import logo from '~/assets/img/fastfeet-logo.svg';

export default function Header() {
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
                <Link to="/">Sair do Sitema</Link>
            </div>
        </Container>
    );
}
