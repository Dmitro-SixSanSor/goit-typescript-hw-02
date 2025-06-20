import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { Photo } from "../../types";

interface ImageGalleryProps {
  photos: Photo[];
  openModal: (photo: Photo) => void;
  bottomRef: React.RefObject<HTMLDivElement> | null;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ photos, openModal, bottomRef }) => {
  return (
    <div className={css.gallery}>
      <ul className={css.list}>
        {photos.map((photo, index) => {
          const isLast = index === photos.length - 1;

          return (
            <li className={css.item} key={photo.id}>
              <ImageCard
                photo={photo}
                openModal={openModal}
                bottomRef={bottomRef}
                isLast={isLast}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ImageGallery;
