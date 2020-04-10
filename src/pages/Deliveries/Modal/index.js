import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import { Container } from './styles';

const modalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',

        minWidth: '450px',
        minHeight: '350px',
    },
    overlay: {
        zIndex: 2,
        background: 'rgba(0, 0, 0, 0.7)',
    },
};

export default function CustomModal({ children, delivery }) {
    const [modalIsOpen, setIsOpen] = useState(false);

    useEffect(() => {
        Modal.setAppElement('body');
    }, []);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <button type="button" onClick={openModal}>
                {children}
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={modalStyles}
                contentLabel="Example Modal"
            >
                <Container>
                    <div>
                        <h3>Informações da Encomenda</h3>
                        <p>
                            {delivery.recipient.street},{' '}
                            {delivery.recipient.number}
                        </p>
                        <p>
                            {delivery.recipient.city} -{' '}
                            {delivery.recipient.state}
                        </p>
                        <p>{delivery.recipient.zip_code}</p>
                    </div>

                    <div>
                        <h3>Datas</h3>
                        <p>
                            <strong>Retirada:</strong> {delivery.start_date}
                        </p>
                        <p>
                            <strong>Entrega:</strong> {delivery.end_date}
                        </p>
                    </div>

                    <div>
                        <h3>Assinatura do destinatário</h3>
                        <p>{delivery.signature}</p>
                    </div>
                </Container>
            </Modal>
        </>
    );
}

CustomModal.propTypes = {
    children: PropTypes.node.isRequired,
    delivery: PropTypes.shape({
        start_date: PropTypes.string,
        end_date: PropTypes.string,
        signature: PropTypes.string,

        recipient: PropTypes.shape({
            street: PropTypes.string,
            number: PropTypes.number,
            city: PropTypes.string,
            state: PropTypes.string,
            zip_code: PropTypes.string,
        }),
    }).isRequired,
};
