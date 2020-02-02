import React from "react";
import Styles from "../styles/index.jsx";

const AvailableTimeButton = props => (
  <button onclick={props.reserve} className={Styles.timeButton}>
    {props.time}
  </button>
);

export default AvailableTimeButton;
