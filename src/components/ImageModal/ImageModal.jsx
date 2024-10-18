import Modal from "react-modal";
import css from "./ImageModal.module.css";

const ImageModal = ({ image, isOpen, onClose }) => {
  if (!image) return null;
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className={css.modal}>
      <div onClick={onClose} className={css.modalContent}>
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          className={css.modalImage}
        />
      </div>
    </Modal>
  );
};

export default ImageModal;
