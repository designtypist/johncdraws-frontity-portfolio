import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import { connect, useConnect, styled } from "frontity";
import Link from "@frontity/components/link";

const ImageGallery = ({ children, ...props }) => {  
  const { state, actions } = useConnect();
  
  const [imageToShow, setImageToShow] = useState('')
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);

  //function to show a specific image in the lightbox, amd make lightbox visible
  const showImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };
  //hide lightbox
  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  return (
    <>
      {children.map((element, index) => {
        let image = element.props.children.props.children.props.src
        
        return (
          <li className="blocks-gallery-item" key={index} onClick={() => showImage(image)}>
            {element.props.children}
          </li>
        )
      })}
      {
        lightboxDisplay ? 
        <Lightbox onClick={hideLightBox}>
          <LightboxImage src={imageToShow}></LightboxImage>
        </Lightbox>
        : ""
      }
    </>
  );
};

const imageGallery = {
  name: "image-gallery",
  priority: 10,
  test: ({ component, props }) => component === "ul" && props.className === "blocks-gallery-grid",
  processor: ({ node }) => {
    if (node.parent.component === "noscript") return null;
    
    node.component = ImageGallery;
    return node;
  },
};

const Lightbox = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LightboxImage = styled.img`
  height: 80vh;
  max-width: 90vw;
  object-fit: contain;
`;

export default connect(imageGallery);