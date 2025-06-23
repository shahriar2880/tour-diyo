import React, { useState } from "react";
import GalleryImg1 from "../../assets/images/gallery/g1.jpg";
import GalleryImg2 from "../../assets/images/gallery/g2.jpg";
import GalleryImg3 from "../../assets/images/gallery/g3.jpg";
import GalleryImg4 from "../../assets/images/gallery/g4.jpg";
import GalleryImg5 from "../../assets/images/gallery/g5.jpg";
import GalleryImg6 from "../../assets/images/gallery/g6.jpg";
import GalleryImg7 from "../../assets/images/gallery/g7.jpg";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./Gallery.css";

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const images = [
    GalleryImg1,
    GalleryImg2,
    GalleryImg3,
    GalleryImg4,
    GalleryImg5,
    GalleryImg6,
    GalleryImg7,
  ];

  return (
    <div className="gallery-grid">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Gallery ${index + 1}`}
          onClick={() => {
            setPhotoIndex(index);
            setOpen(true);
          }}
          className="gallery-img"
        />
      ))}

      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={photoIndex}
          slides={images.map((src) => ({ src }))}
        />
      )}
    </div>
  );
};

export default Gallery;
