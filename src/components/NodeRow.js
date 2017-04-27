import React, { Component } from 'react';

const NodeRow = ({rowName, label, text}) => {
    if (!text) {
        return null;
    }
    
    return <div className={`node-${rowName}`}>
        <span className="node-label">
            {label}:&nbsp; 
        </span>
        <span className="node-value">
            {text}
        </span>
    </div>
};

export default NodeRow;