import React, { useEffect } from "react";
import { updateCurrentImage } from "../auth";
import { useSelector, useDispatch } from "react-redux";
import BlueMountainsIMG from "./assets/blue-mountains-vertical-hd.jpeg";

const Image = () => {
  const { currentImage } = useSelector((state) => state.calendar);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateCurrentImage(BlueMountainsIMG))
  }, [])

  return (
    <div>
      <img id="img" src={currentImage} alt=""></img>
    </div>
  )
};

export default Image;