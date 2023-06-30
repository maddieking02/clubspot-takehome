import React, { useEffect } from "react";
import { updateCurrentDate, updateCurrentImage, updateModalDisplay } from "../auth";
import { useSelector, useDispatch } from "react-redux";
import BlueMountainsIMG from "./assets/blue-mountains-vertical-hd.jpeg";
import Modal from "./Modal";
import { ModalStyle } from "./assets/styles";
import { format, getDate } from "date-fns";

const Image = () => {
  const { currentImage, todaysDate, modalDisplay } = useSelector((state) => state.calendar);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateCurrentImage(BlueMountainsIMG))
  }, [])

  const handleImgClick = () => {
    dispatch(updateModalDisplay(true));
  }

  const handleBtnClick = () => {
    console.log('button has been clicked')
    dispatch(updateCurrentDate(new Date()));
  }

  return (
    <div className="img-text-contain flex-align-content">
      <div className="img-contain flex-align-content">
        <img id="img" src={currentImage} alt=""></img>
        <div className="overlay" onClick={() => handleImgClick()}/>
        <div className="text-contain flex-align-content">
          <p className="img-month-yr">{format(todaysDate, 'MMMM - yyyy').toUpperCase()}</p>
          <p className="img-date">{getDate(todaysDate)}</p>
        </div>
        <button className="reset-btn" type="button" onClick={() => {handleBtnClick()}}>TODAY</button>
      </div>
      {modalDisplay && (<ModalStyle><Modal /></ModalStyle>)}
    </div>
  )
};

export default Image;