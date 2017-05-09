import React, { Component } from 'react';

import {getContentById, getNumberOfOptions} from '../helpers';

import NewNode from './NewNode';

export class SelectNodeType extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nodeType: null,
            options: null,
            maxLength: 50
        }
    }

    handleChange(nodeType) {
        this.setState({nodeType});
    }

    render() {
        const { currentNode, questions, answers, onSave } = this.props;

        return <div className="selectNodeType">
            <fieldset>
                <input onClick={() => this.handleChange('question')} type="radio" name="nodeType" id="questionNode" />
                <label htmlFor="questionNode">Question</label>
                <input onClick={() => this.handleChange('answer')} type="radio" name="nodeType" id="answerNode" />
                <label htmlFor="<answer></answer>Node">Answer</label>
                <input type="number" id="maxLength" defaultValue={this.state.maxLength}
                    onChange={(e) => {
                        this.setState({maxLength: e.target.value})
                    }}
                />
                <label htmlFor="maxLength">Text preview max length</label> 
            </fieldset>
            {this.state.nodeType === 'question' && <NewNode
                options={questions}
                maxLength={this.state.maxLength}
                onSave={(childId) => onSave({
                    nodeId: currentNode.id, 
                    childType: this.state.nodeType, 
                    numberOfOptions: getNumberOfOptions(getContentById(questions, childId)),
                    childId
                })}
            />}
            {this.state.nodeType === 'answer' && <NewNode
                options={answers}
                maxLength={this.state.maxLength}                
                onSave={(childId) => onSave({
                    nodeId: currentNode.id, 
                    childType: this.state.nodeType, 
                    childId
                })}                
            />}
        </div>;
    }
};

export default SelectNodeType;
