import React from 'react';

const ClearButton = props => {
    const { clearCompleted } = props;

    return (
        <button className="clear-button" onClick={clearCompleted}>Clear Completed</button>
    );
};

export default ClearButton;