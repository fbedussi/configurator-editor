import React, { Component } from 'react';

import NewNode from './NewNode';

class SelectNodeType extends Component {
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
                <label htmlFor="questionNode">Answer</label>
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
                onSave={onSave}
            />}
            {this.state.nodeType === 'answer' && <NewNode
                options={answers}
                maxLength={this.state.maxLength}                
                onSave={onSave}                
            />}
        </div>;
    }
};

export default SelectNodeType;
