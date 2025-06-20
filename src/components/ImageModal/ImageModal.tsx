import Modal from 'react-modal';
import css from './ImageModal.module.css';
import { Photo } from '../../types';

interface ImageModalProps {
  image: Photo;
  isOpen: boolean;
  isClose: () => void;
}

const customStyles: Modal.Styles = {
  overlay: {
    backgroundColor: 'rgb(12 11 11 / 77%)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 0,
  },
};

export function ImageModal({ image, isOpen, isClose }: ImageModalProps): JSX.Element {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={isClose}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <div className={css.info}>
        <p className={css.author}>{image.user.first_name}</p>
        <a
          href={image.user.links.html}
          target="_blank"
          rel="noopener noreferrer"
          className={css.portfolio}
        >
          View Portfolio
        </a>
      </div>

      <img
        className={css.modalImage}
        src={image.urls.regular}
        alt={image.alt_description ?? 'Image'}
        width={400}
        height={600}
      />

      <div className={css.imageInfo}>
        <span>Likes: {image.likes}</span>
        {image.views > 0 && <span>Views: {image.views}</span>}
        {image.location?.name && <span>Location: {image.location.name}</span>}
      </div>
    </Modal>
  );
}
