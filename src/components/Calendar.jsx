import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import Styles from "../styles/Calendar.css";
import axios from "axios";

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      partySize: 1,
      date: moment(new Date()),
      time: "9:00 AM"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleChangeDate(date) {
    this.setState({ date: date });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .get("id/reservation", {
        params: {
          id: 1,
          size: this.state.partySize,
          time: this.state.time
        }
      })
      .then(results => {
        console.log(results);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className={Styles.main}>
        <form onSubmit={this.handleSubmit}>
          <h1 className={Styles.header}>Make a reservation</h1>
          <label className={Styles.partySizeLabel}>
            Party size:
            <select
              className={Styles.partySize}
              name="partySize"
              value={this.state.partySize}
              onChange={this.handleChange}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
            </select>
          </label>

          <br />
          <div className={Styles.container}>
            <div className={Styles.item1}>
              <label className={Styles.dateLabel}>Date:</label>
              <br />
              <DatePicker
                className={Styles.date}
                selected={this.state.date}
                onChange={this.handleChangeDate}
              />
              <br />
            </div>
            <div className={Styles.item2}>
              <label>
                Time:
                <select
                  name="time"
                  value={this.state.time}
                  onChange={this.handleChange}
                >
                  <option value="9:00 AM">9:00 AM</option>
                  <option value="9:30 AM">9:30 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="10:30 AM">10:30 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="11:30 AM">11:30 AM</option>
                  <option value="12:00 AM">12:00 PM</option>
                  <option value="12:30 AM">12:30 PM</option>
                  <option value="1:00 PM">1:00 PM</option>
                  <option value="1:30 PM">1:30 PM</option>
                  <option value="2:00 PM">2:00 PM</option>
                  <option value="2:30 PM">2:30 PM</option>
                  <option value="3:00 PM">3:00 PM</option>
                  <option value="3:30 PM">3:30 PM</option>
                  <option value="4:00 PM">4:00 PM</option>
                  <option value="4:30 PM">4:30 PM</option>
                  <option value="5:00 PM">5:00 PM</option>
                  <option value="5:30 PM">5:30 PM</option>
                  <option value="6:00 PM">6:00 PM</option>
                  <option value="6:30 PM">6:30 PM</option>
                  <option value="7:00 PM">7:00 PM</option>
                  <option value="7:30 PM">7:30 PM</option>
                  <option value="8:00 PM">8:00 PM</option>
                  <option value="8:30 PM">8:30 PM</option>
                  <option value="9:00 PM">9:00 PM</option>
                  <option value="9:30 PM">9:30 PM</option>
                  <option value="10:00 PM">10:00 PM</option>
                  <option value="10:30 PM">10:30 PM</option>
                  <option value="11:00 PM">11:00 PM</option>
                  <option value="11:30 PM">11:30 PM</option>
                </select>
              </label>
            </div>
          </div>
          <br />

          <input className={Styles.btn} type="submit" value="Find a Table" />
        </form>
        <div className={Styles.footer}>Booked 26 times today</div>
      </div>
    );
  }
}

export default Calendar;
