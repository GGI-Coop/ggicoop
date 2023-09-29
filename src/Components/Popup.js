import React  from "react";
import "./Popup.scss";

  const Popup = (props) => {
    return (
      <div className="Popup" style={props.popupStyle}>
        {props.data}
      </div>
    );
  };
 export default Popup;