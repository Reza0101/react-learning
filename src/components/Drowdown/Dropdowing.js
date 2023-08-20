import React, { useState } from "react";
import style from "./Drowdowing.module.css";
import { IoIosArrowUp } from "react-icons/io";

const Dropdowing = (props) => {
  const data = props.questionData;

  const [down, setDown] = useState(false);

  const dropdown = () => {
    setDown((prev) => !prev);
  };

  return (
    <div data-aos="zoom-in" className={style.container} dir="rtl">
      <div className={style.titleDrowpdown} onClick={dropdown}>
        <p>{data.title}</p>
        <IoIosArrowUp className={down ? style.openIcon : style.closedIcon} />
      </div>
      <div className={down ? style.openText : style.closedText}>
        <p>{data.text}</p>
      </div>
    </div>
  );
};

export default Dropdowing;
