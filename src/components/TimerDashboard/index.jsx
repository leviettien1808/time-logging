import React, { Component } from "react";
import EditableTimerList from "../EditableTimerList";
import ToggleableTimerForm from "../ToggleableTimerForm";

export default class TimerDashboard extends Component {
  render() {
    return (
      <div>
        <div>
          <EditableTimerList />
          <ToggleableTimerForm isOpen={false} />
        </div>
      </div>
    );
  }
}
