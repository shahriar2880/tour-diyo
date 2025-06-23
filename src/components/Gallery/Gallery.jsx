import React from 'react'
import Lightroom from 'react-lightbox-gallery'
import GalleryImg1 from "../../assets/images/gallery/g1.jpg"
import GalleryImg2 from "../../assets/images/gallery/g2.jpg"
import GalleryImg3 from "../../assets/images/gallery/g3.jpg"
import GalleryImg4 from "../../assets/images/gallery/g4.jpg"
import GalleryImg5 from "../../assets/images/gallery/g5.jpg"
import GalleryImg6 from "../../assets/images/gallery/g6.jpg"
import GalleryImg7 from "../../assets/images/gallery/g7.jpg"
import './Gallery.css';


const Gallery = () => {

    var images = [
        {
            src: GalleryImg1,
            desc: "Person wearing shoes",
            sub: "Gift Habeshaw"
        },
        {
            src: GalleryImg2,
            desc: "Person wearing shoes",
            sub: "Gift Habeshaw"
        },
        {
            src: GalleryImg3,
            desc: "Blonde woman wearing sunglasses smiling at the camera ",
            sub: "Dmitriy Frantsev"
        },
        {
            src: GalleryImg4,
            sub: "Harry Cunningham"
        },
        {
            src: GalleryImg5,
            desc: "Jaipur , Rajasthan India",
            sub: "Liam Baldock"
        },
        {
            src: GalleryImg6,
            sub: "Verne Ho"
        },
        {
            src: GalleryImg7,
            desc: "Rann of kutch , India",
            sub: "Hari Nandakumar"
        },
    ];

    var settings = {
        columnCount: {
            default: 3,
            mobile: 2,
            tab: 3
        },
        mode: "dark",
        enableZoom:false,
    };
    return (
        <div className='gallery'>
        <Lightroom images={images} settings={settings} />
        </div>
   );
}

export default Gallery