import React from 'react';
import PropTypes from 'prop-types';
import { MdMoreHoriz } from 'react-icons/md';

import { Actions as Container, ActionsList } from './styles';

export default function Actions({ children }) {
    return (
        <Container>
            <MdMoreHoriz size={36} />
            <ActionsList>{children}</ActionsList>
        </Container>
    );
}

Actions.propTypes = {
    children: PropTypes.node.isRequired,
};
