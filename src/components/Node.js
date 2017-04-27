import React, { Component } from 'react';

import NodeRow from './NodeRow';

const Node = ({currentNode, answers, questions}) => {
    var node;
    var nextNode0 = currentNode[0];
    var nextNode1 = currentNode[1];
    
    if (currentNode.questionId) {
        node = questions.filter(question => question.id === currentNode.questionId)[0];
    }

    if (currentNode.answerId) {
        node = answers.filter(answer => answer.id === currentNode.answerId)[0];
    }

    return <div className="node">
    <NodeRow
        rowName="title"
        label="Title"
        text={node.title}
    />

    <NodeRow
        rowName="subtitle"
        label="Subtitle"
        text={node.subtitle}
    />

    <NodeRow
        rowName="text"
        label="Text"
        text={node.text}
    />

    {node.images && node.images.map(imagePath => <NodeRow rowName="image" label="Image" text={imagePath} />)}

    {nextNode0 && <Node 
        key={nextNode0.id}
        currentNode={nextNode0}
        answers={answers}
        questions={questions}
    />}
    {nextNode1 && <Node 
        key={nextNode1.id}
        currentNode={nextNode1}
        answers={answers}
        questions={questions}
    />}
</div>;
};

export default Node;