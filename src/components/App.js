import React, { Component } from 'react';
import './App.css';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increaseAction, decreaseAction } from '../actions/counterActions';

class App extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.decreaseCount}>-</button>
        <div>{this.props.countVal}</div>
        <button onClick={this.props.increaseCount}>+</button>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({ countValue: state.count });
function mapStateToProps(state) {
  return {
    countVal: state.count
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ increaseCount: increaseAction, decreaseCount: decreaseAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
