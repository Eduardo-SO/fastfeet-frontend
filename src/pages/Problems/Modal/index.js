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

        width: '450px',
    },
    overlay: {
        zIndex: 2,
        background: 'rgba(0, 0, 0, 0.7)',
    },
};

export default function CustomModal({ children, problem }) {
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
                        <h3>VISUALIZAR PROBLEMA</h3>
                        <p>{problem.description}</p>
                    </div>
                </Container>
            </Modal>
        </>
    );
}

CustomModal.propTypes = {
    children: PropTypes.node.isRequired,
    problem: PropTypes.shape({ description: PropTypes.string }).isRequired,
};
