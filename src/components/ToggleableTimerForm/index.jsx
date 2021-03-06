import React, { Component } from "react";
import TimerForm from "../TimerForm";

export default class ToggleableTimerForm extends Component {
  render() {
    if (this.props.isOpen) {
      return <TimerForm />;
    } else {
      return (
        <div>
          <button>+</button>
        </div>
      );
    }
  }
}
