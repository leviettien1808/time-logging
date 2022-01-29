import React, { Component } from "react";
import { renderElapsedString } from "../../helpers";

export default class Timer extends Component {
  render() {
    const elapsedString = renderElapsedString(this.props.elapsed);
    return (
      <div
        style={{
          marginBottom: 12,
          textAlign: "left",
          width: 300,
        }}
      >
        <div
          style={{
            border: "solid green",
            borderStartStartRadius: 8,
            borderStartEndRadius: 8,
            borderBottom: 0,
            padding: 16,
          }}
        >
          <h3 style={{ margin: 0 }}>{this.props.title}</h3>
          <div>{this.props.project}</div>
          <div style={{ textAlign: "center" }}>
            <h2>{elapsedString}</h2>
          </div>
          <div style={{ textAlign: "right" }}>
            <span style={{ marginRight: 12 }}>🗑</span>
            <span>🖉</span>
          </div>
        </div>
        <div
          style={{
            border: "solid red",
            borderEndEndRadius: 8,
            borderEndStartRadius: 8,
            height: 32,
            lineHeight: 2,
            textAlign: "center",
          }}
        >
          Start
        </div>
      </div>
    );
  }
}
