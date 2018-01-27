# Redux Counter

Like a father of all Redux tutorials, this repository is my attempt to recreate a very simple counter app without the tutorials to practice and understand Redux.

## Process

```
npx create-react-app reduxcounter
```

### Install Redux
```
npm install --save react-redux redux
```

```
bundle install
```

### App Hierarchy
![alt text](https://github.com/withoutwax/")

### index.js (Connecting React with Redux)
Added ```createStore```, ```Provider``` ```counter```(reducers).  

```Javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counter from './reducers';

const store = createStore(counter);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>
  , document.getElementById('root'));
```

### Reducers
Create a reducer with Immutable Javascript.
```Javascript
function counter(state, action) {
  if (state === undefined) {
    return { count: 0 };
  }

  switch (action.type) {
    case "INCREMENT": {
      return Object.assign({}, { count: state.count+1 });
    }
    case "DECREMENT": {
      return Object.assign({}, { count: state.count-1 });
    }
    default: {
      return state
    }
  }
}

export default counter;
```

### Action Creators
Created very simple action creators in a separate file. No payloads, just types.
```Javascript
export function increaseAction() {
  return {
    type: "INCREMENT"
  };
}

export function decreaseAction() {
  return {
    type: "DECREMENT"
  };
}
```

### Connecting with ```connect``` from ```react-redux```
Added ```bindActionCreators```, ```increaseAction, decreaseAction``` from Action Creators.
 -  ```mapStateToProps``` and ```mapDispatchToProps``` connects from react-redux library and provides a convenient way to access the state and dispatch function of my store.

Used ```mapStateToProps``` to specify which part of state we want to provide to the components as props (In this case, the state is only 1, count).
Used ```mapDispatchToProps``` to also specify which part of actions(dispatch) we want to provide to the components as props (In this case, the state is only 1, count).

```Javascript
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

```

After using ```mapStateToProps``` and ```mapDispatchToProps```, we must connect those two functions with ```connect```:
```Javascript
export default connect(mapStateToProps, mapDispatchToProps)(App);
```

We can now then use Actions and States with React Component as props:
```Javascript
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
```
