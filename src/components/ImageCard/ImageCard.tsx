import React from 'react';
import { ImageData } from '../../types';

interface ImageCardProps {
  photo: ImageData;
  openModal: (photo: ImageData) => void;
  bottomRef?: React.RefObject<HTMLDivElement> | null;
  isLast?: boolean;
}

const ImageCard: React.FC<ImageCardProps> = ({ photo, openModal, bottomRef, isLast }) => {
  return (
    <div
      onClick={() => openModal(photo)}
      style={{ cursor: 'pointer' }}
      ref={isLast ? bottomRef : null}
    >
      <img src={photo.urls.small} alt={photo.alt_description ?? 'Image'} />
    </div>
  );
};

export default ImageCard;
