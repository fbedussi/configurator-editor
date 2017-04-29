import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    openNodes: state.openNodes 
});

const mapDispatchToProps = () => ({
});

class OpenBtn extends Component {
  isOpen() {
    return this.props.openNodes.includes(this.nodeId);
  }

  render() {
    const { nodeId } = this.props;
    const label = this.isOpen? 'close' : 'open';
    return (
      <button class="btn">
        {label}
      </button>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OpenBtn);
