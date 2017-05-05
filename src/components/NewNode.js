import React from 'react';

import Btn from './Btn';

const NewNode = ({options, maxLength, onSave}) => {
    var selectedId;

    return <div> 
    <select onChange={(e) => {selectedId = e.target.value}}>
        {options.map(option => {
            var text;
            if (option.title) {
                text = option.title;

                if (option.subtitle) {
                    text += ' / ' + option.subtitle;
                }
            } else {
                text = option.text;
            }

            return <option key={option.id} value={option.id}>{text.substring(0, maxLength)}</option>;
        })}
    </select>
    <Btn label="save" onClick={() => onSave(selectedId)}/>
    </div>
};

export default NewNode;