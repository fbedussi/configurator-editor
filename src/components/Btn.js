import React from 'react';

const Btn = ({label, onClick}) => <button className="btn" onClick={onClick}>
        {label}
      </button>;

export default Btn;
