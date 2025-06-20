import React from "react";
import { ImageData } from "../../types";

interface ImageCardProps {
  photo: ImageData;
  openModal: (photo: ImageData) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ photo, openModal }) => {
  return (
    <div onClick={() => openModal(photo)} style={{ cursor: "pointer" }}>
      <img src={photo.urls.small} alt={photo.alt_description ?? "Image"} />
    </div>
  );
};

export default ImageCard;
