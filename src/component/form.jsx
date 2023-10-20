import React from "react";
import { useState } from "react";
import "./form.css";

function Form() {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");

  const AlertData = (event) => {
    event.preventDefault();
    alert(
      `Your inputs are:  \n Name: ${name}, \n Time: ${time}, \n Email:  \n ${email}, \n Date:  ${date}`
    );
  };

  return (
    <div>
      <h3>Form</h3>
      <form onSubmit={AlertData}>
        <label>
          NAMES:
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            required
          />
        </label>

        <label>
          TIME:
          <input
            value={time}
            onChange={(e) => setTime(e.target.value)}
            type="time"
            required
          />
        </label>

        <label>
          EMAIL:
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
          />
        </label>

        <label>
          DATE:
          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="date"
            required
          />
        </label>
        <br />
        <label>
          <input type="submit" />
        </label>
      </form>
    </div>
  );
}

export default Form;
