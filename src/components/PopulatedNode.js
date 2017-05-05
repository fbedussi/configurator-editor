import React from 'react';

import NodeRow from './NodeRow';
import NodeContainer from './NodeContainer';

const PopulatedNode = ({ currentNode, questions, answers }) => {
    var populatedNode;

    if (currentNode.questionId) {
        populatedNode = questions.filter(question => question.id === currentNode.questionId)[0];
    }

    if (currentNode.answerId) {
        populatedNode = answers.filter(answer => answer.id === currentNode.answerId)[0];
    }

    if (!populatedNode) {
        return null;
    }

    return <div className="populatedNode">
        <NodeRow
            rowName="title"
            label="Title"
            text={populatedNode.title}
        />

        <NodeRow
            rowName="subtitle"
            label="Subtitle"
            text={populatedNode.subtitle}
        />

        <NodeRow
            rowName="text"
            label="Text"
            text={populatedNode.text}
        />

        {populatedNode.images && populatedNode.images.map((imagePath, i) => <NodeRow key={`image_${i}`} rowName="image" label="Image" text={imagePath} />)}

        {populatedNode.options && populatedNode.options.map((option, i) => {
            const nextNode = currentNode[i];

            return nextNode ? <NodeContainer
                key={nextNode.id || i}
                label={option}
                currentNode={nextNode}
                answers={answers}
                questions={questions}
            /> : null;
        })}
    </div>;
};

export default PopulatedNode;
