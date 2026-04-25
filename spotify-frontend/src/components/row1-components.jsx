import React from "react";

function Album1(props) {
  return (
    <>
      <div className="A-D">
        <img className="A-img" src={props.img} alt="" />
        <h3 className="R-title">{props.tlt}</h3>
        <img
          className="p-icon"
          src="https://cdn-icons-png.flaticon.com/512/8212/8212668.png"
          alt=""
        />
      </div>
    </>
  );
}

export default Album1;
