import React, { Component } from "react";

export default class TimerForm extends Component {
  render() {
    const submitText = this.props.title ? "Update" : "Create";
    return (
      <div
        style={{
          border: "solid blue",
          borderRadius: 8,
          marginBottom: 12,
          padding: 16,
          textAlign: "left",
          width: 264,
        }}
      >
        <div style={{ marginBottom: 12 }}>
          <label style={{ fontWeight: "bold" }}>Title</label>
          <br />
          <input
            type="text"
            defaultValue={this.props.title}
            style={{
              borderRadius: 4,
              borderWidth: "1px",
              height: 24,
              marginTop: 6,
              // padding: 4,
              width: "97%",
            }}
          />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label style={{ fontWeight: "bold" }}>Project</label>
          <br />
          <input
            type="text"
            defaultValue={this.props.project}
            style={{
              borderRadius: 4,
              borderWidth: "1px",
              height: 24,
              marginTop: 6,
              // padding: 4,
              width: "97%",
            }}
          />
        </div>
        <div style={{ marginBottom: 12 }}>
          <button
            style={{
              backgroundColor: "transparent",
              border: "solid green",
              borderStartStartRadius: 6,
              borderEndStartRadius: 6,
              borderRightWidth: 1,
              height: 30,
              width: "50%",
            }}
          >
            {submitText}
          </button>
          <button
            style={{
              backgroundColor: "transparent",
              border: "solid green",
              borderStartEndRadius: 6,
              borderEndEndRadius: 6,
              borderLeftWidth: 1,
              height: 30,
              width: "50%",
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }
}
