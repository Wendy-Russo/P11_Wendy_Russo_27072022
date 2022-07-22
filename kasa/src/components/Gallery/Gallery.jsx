import React, {useState} from 'react';
//import { createPath } from 'react-router-dom';
import './Gallery.scss';
//import { Link } from 'react-router-dom';


function Gallery(props) {

  const PICTURES = props.pictures;
  const [currentImage , setCurrentImage] = useState(0);
  const style = {
    transform : `translateX(-${currentImage}00%)`
  };

  const MOVE_TO_NEXT = () => {
    const IMAGES = document.getElementsByClassName("gallery-img");

    setCurrentImage((currentImage + 1) % IMAGES.length);

    for (let index = 0; index < IMAGES.length; index++) {
      IMAGES[index].style.transform = `translateX(-${currentImage}00%)`;
    }

  };

  const MOVE_TO_PREV = () => {
    const IMAGES = document.getElementsByClassName("gallery-img");

    setCurrentImage((currentImage + (IMAGES.length-1)) % IMAGES.length);

    for (let index = 0; index < IMAGES.length; index++) {
      IMAGES[index].style.transform = `translateX(-${currentImage}00%)`;
    }

  };

  if(PICTURES.length === 1){
    return(

      <div className='gallery'>

        <div className='overlay'>

        </div>
        <div className='images'>
          {PICTURES.map((image,id) => (<img key={id} alt="gallery"  className="gallery-img" style={style} src={image} />))}
        </div>

      </div>
    )
  }

  return(

    <div className='gallery'>

      <span className="material-symbols-rounded icon-arrow left" onClick={MOVE_TO_PREV}>
        chevron_left
      </span>
      <span className="material-symbols-rounded icon-arrow right" onClick={MOVE_TO_NEXT}>
        chevron_right
      </span>
      <div className='overlay'>

      </div>
      <div className='images'>
        {PICTURES.map((image,id) => (<img key={id} alt="gallery"  className="gallery-img" style={style} src={image} />))}
      </div>

    </div>
  )
}

export default Gallery
