import React, { Component } from 'react';
import { connect } from 'react-redux';

import {setNode} from '../actions';
import {getContentById} from '../helpers';

import Btn from './Btn';
import NodeContainer from './NodeContainer';
import SelectNodeType from './SelectNodeType';
import PopulatedNode from './PopulatedNode';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
    setNode: nodeData => dispatch(setNode(nodeData))
});

class Node extends Component {
    constructor(props) {
        super(props);

        this.state = {
            change: false
        }
    }

    render() {
        const { currentNode, questions, answers } = this.props;

        var populatedNode;

        if (currentNode.questionId) {
            populatedNode = getContentById(questions, currentNode.questionId);
        }

        if (currentNode.answerId) {
            populatedNode = getContentById(answers, currentNode.answerId);
        }

        return <div className="node">
            <Btn
                onClick={() => this.setState({ change: !this.state.change })}
                label="change"
            />
            {this.state.change ?
                <div>
                    <Btn
                        onClick={() => this.setState({ change: false })}
                        label="cancel"
                    />
                    <SelectNodeType
                        currentNode={currentNode}
                        questions={questions}
                        answers={answers}
                        onSave={nodeData => {
                            this.setState({ change: false });
                            this.props.setNode(nodeData)
                        }}
                    />
                </div>
                : <PopulatedNode
                    currentNode={currentNode}
                    questions={questions}
                    answers={answers}
                />
            }
        </div>;
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Node);
