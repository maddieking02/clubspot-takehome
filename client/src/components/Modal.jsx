import React from 'react';
import { updateCurrentImage, updateModalDisplay } from "../auth";
import { useSelector, useDispatch } from "react-redux";
import { ModalContent } from "./assets/styles";
import BlueMountainsIMG from "./assets/blue-mountains-vertical-hd.jpeg";
import CanyonRoadIMG from "./assets/canyon-road-vertical-hd.jpeg";
import FallForestIMG from "./assets/fall-forest-vertical-hd.jpeg";
import MoonlightStarsIMG from "./assets/moonlight-stars-vertical-hd.jpeg";
import PacificOceanIMG from "./assets/pacific-ocean-vertical-hd.jpeg";
import WinterForestIMG from "./assets/winter-forest-vertical-hd.jpeg";
import { IoMdClose } from "react-icons/io";

const Modal = () => {
  const { currentImage, modalDisplay } = useSelector((state) => state.calendar);
  const dispatch = useDispatch();

  return (
    <ModalContent>
      <IoMdClose className="closeBtn" onClick={() => dispatch(updateModalDisplay(false))}/>
      <div className="modal-imgs-contain flex-align-content">
        <img className="modal-img" src={BlueMountainsIMG} alt="" onClick={() => dispatch(updateCurrentImage(BlueMountainsIMG))}></img>
        <img className="modal-img" src={CanyonRoadIMG} alt="" onClick={() => dispatch(updateCurrentImage(CanyonRoadIMG))}></img>
        <img className="modal-img" src={FallForestIMG} alt="" onClick={() => dispatch(updateCurrentImage(FallForestIMG))}></img>
        <img className="modal-img" src={MoonlightStarsIMG} alt="" onClick={() => dispatch(updateCurrentImage(MoonlightStarsIMG))}></img>
        <img className="modal-img" src={PacificOceanIMG} alt="" onClick={() => dispatch(updateCurrentImage(PacificOceanIMG))}></img>
        <img className="modal-img" src={WinterForestIMG} alt="" onClick={() => dispatch(updateCurrentImage(WinterForestIMG))}></img>
      </div>
    </ModalContent>
  )
};

export default Modal;