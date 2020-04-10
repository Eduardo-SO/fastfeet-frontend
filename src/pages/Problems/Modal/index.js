import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',

        width: '400px',
    },
    overlay: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'black',
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
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2>{delivery.product}</h2>
                <button type="button" onClick={closeModal}>
                    close
                </button>
                <div>I am a modal</div>
                <form>
                    <input />
                    <button type="button">tab navigation</button>
                    <button type="button">stays</button>
                    <button type="button">inside</button>
                    <button type="button">the modal</button>
                </form>
            </Modal>
        </>
    );
}

CustomModal.propTypes = {
    children: PropTypes.node.isRequired,
    delivery: PropTypes.shape({
        product: PropTypes.string,
    }).isRequired,
};
