import React, { Component } from 'react';

import Btn from './Btn';
import NodeContainer from './NodeContainer';
import SelectNodeType from './SelectNodeType';
import PopulatedNode from './PopulatedNode';

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
            populatedNode = questions.filter(question => question.id === currentNode.questionId)[0];
        }

        if (currentNode.answerId) {
            populatedNode = answers.filter(answer => answer.id === currentNode.answerId)[0];
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
                        onSave={() => this.setState({ change: false })}
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

export default Node;
