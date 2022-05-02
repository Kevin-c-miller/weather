import { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '55%',
  },
};

Modal.setAppElement('#root');

interface AlertsProps {
  description: string;
  event: string;
  sender: string;
}

const Alerts = ({ sender, event, description }: AlertsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // open modal
  const openModal = () => {
    setIsOpen(true);
  };

  // close modal
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="alerts">
      <button onClick={openModal}>Alerts in your area</button>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Alerts Modal"
      >
        <div className="alertsModal">
          {sender && event && description ? (
            <div className="myAlerts">
              <h3>{event}</h3>
              <h4>From: {sender}</h4>
              <h5>Details: </h5>
              <p>{description}</p>
            </div>
          ) : (
            <div className="myAlerts">
              <h4>No current alerts in your area</h4>
            </div>
          )}

          <button className="modalBtn" onClick={closeModal}>
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Alerts;
