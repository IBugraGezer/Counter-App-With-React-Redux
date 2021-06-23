import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { increaseByTwoCounter } from "../redux/counterActions";
import { connect } from "react-redux";

class IncreaseByTwoCounter extends Component {
  render() {
    return (
      <div>
        <button
          onClick={(e) => {
            this.props.dispatch(increaseByTwoCounter());
          }}
        >
          increase by 2
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(increaseByTwoCounter, dispatch) };
}

export default connect(mapDispatchToProps)(IncreaseByTwoCounter);
