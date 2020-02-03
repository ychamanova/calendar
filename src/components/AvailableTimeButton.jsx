import React from "react";
import Styles from "../styles/AvailableTimeButton.css";

const AvailableTimeButton = props => (
  <button onClick={props.reserve} className={Styles.timeButton}>
    {props.time}
  </button>
);

export default AvailableTimeButton;
