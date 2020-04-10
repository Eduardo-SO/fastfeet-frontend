import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { MdLens } from 'react-icons/md';

import { Status as Container } from './styles';

export default function Status({ delivery }) {
    const [status, setStatus] = useState({});

    useEffect(() => {
        function handleStatus() {
            if (delivery.canceled_at) {
                return setStatus({
                    id: 'Cancelada',
                    primaryColor: '#DE3B3B',
                    secondaryColor: '#FAB0B0',
                });
            }

            if (delivery.start_date && !delivery.end_date) {
                return setStatus({
                    id: 'Retirada',
                    primaryColor: '#4D85EE',
                    secondaryColor: '#BAD2FF',
                });
            }

            if (delivery.start_date && delivery.end_date) {
                return setStatus({
                    id: 'Entregue',
                    primaryColor: '#2CA42B',
                    secondaryColor: '#DFF0DF',
                });
            }

            return setStatus({
                id: 'Pendente',
                primaryColor: '#C1BC35',
                secondaryColor: '#F0F0DF',
            });
        }

        handleStatus();
    }, [delivery.canceled_at, delivery.end_date, delivery.start_date]);

    return (
        <Container
            primaryColor={status.primaryColor}
            secondaryColor={status.secondaryColor}
        >
            <MdLens size={10} />
            {status.id}
        </Container>
    );
}

Status.propTypes = {
    delivery: PropTypes.shape({
        canceled_at: PropTypes.string,
        start_date: PropTypes.string,
        end_date: PropTypes.string,
    }).isRequired,
};
