import React from 'react';

import Btn from './Btn';

const NewNode = ({options, maxLength, onSave}) => {
    return <div> 
    <select>
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

            return <option key={option.id}>{text.substring(0, maxLength)}</option>;
        })}
    </select>
    <Btn label="save" onClick={() => onSave()}/>
    </div>
};

export default NewNode;