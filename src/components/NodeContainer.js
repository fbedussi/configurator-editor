import React, { Component } from 'react';
import { connect } from 'react-redux';

import {toggleOpen} from '../actions';

const mapStateToProps = (state) => ({
    openNodes: state.openNodes
});

const mapDispatchToProps = (dispatch) => ({
    toggleOpen: nodeId => dispatch(toggleOpen(nodeId))
});

import Node from './Node';

class NodeContainer extends Component {
    isOpen() {
        return this.props.openNodes.includes(this.props.currentNode.id);
    }

    render() {
        const { label, currentNode, answers, questions } = this.props;
        const isOpen = this.isOpen();
        const openClass = isOpen ? 'is-open' : 'is-closed';
        const openBtnLabel = isOpen ? 'close' : 'open';

        return <div className={'nodeContainer ' + openClass}>
            <div className="nodeContainer-header">
                <span>{label}</span>
                <button>copy</button>
                <button>delete</button>
                <button className="btn"
                    onClick={() => this.props.toggleOpen(currentNode.id)}
                >
                    {openBtnLabel}
                </button>
            </div>
            <Node
                currentNode={currentNode}
                questions={questions}
                answers={answers}
            />
        </div>;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NodeContainer);
