/* eslint-disable react/prop-types */
import closeIcon from "../assets/img/x-close-delete.svg";

export default function Popup(props) {
  return (props.isVisible) ? (
    <div className="popup">
      <div className="inner">
        <button className="closing" onClick={() => props.setIsVisible(false)}>
          <img src={closeIcon} alt="close" />
        </button>
        {props.children}
      </div>
    </div>
  ) : "";
}
