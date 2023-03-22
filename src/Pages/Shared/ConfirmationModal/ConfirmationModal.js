import React from 'react';

const ConfirmationModal = ({title, message, closeModal, successModal, modalData}) => {
    return (
        <div>
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label 
                        onClick={() => successModal(modalData)} 
                        htmlFor="confirmation-modal" 
                        className="btn btn-error">Sure</label>
                        <button onClick={closeModal} htmlFor="confirmation-modal" className="btn btn-outline">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;