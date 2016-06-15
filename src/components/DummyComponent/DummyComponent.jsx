import React from 'react';
import './DummyComponent.css';

const DummyComponent = React.createClass({
  handleClick: () => {
    alert('CLICK');
  },
  render() {
    return (<button className="dummy-component" onClick={ this.handleClick }>My Dummy Button</button>);
  }
});

export default DummyComponent;
