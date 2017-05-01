import React, { Component } from 'react';

import Node from './Node';
import Btn from './Btn';

class NodeContainer extends Component {
    constructor (props) {
        super(props);

        this.state = {
            open: false
        }
    }

    render() {
        const { label, currentNode, answers, questions } = this.props;
        const openClass = this.state.open ? 'is-open' : 'is-closed';
        const openBtnLabel = this.state.open ? 'close' : 'open';

        return <div className={'nodeContainer ' + openClass}>
            <div className="nodeContainer-header">
                <span>{label}</span>
                <Btn className="btn"
                    onClick={() => this.setState({open: !this.state.open})}
                    label={openBtnLabel}
                />
            </div>
            <Node
                currentNode={currentNode}
                questions={questions}
                answers={answers}
            />            
        </div>;
    }
}

export default NodeContainer;
