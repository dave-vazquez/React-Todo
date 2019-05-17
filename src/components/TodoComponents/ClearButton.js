import React from 'react';

const ClearButton = props => {
    const { clearCompleted } = props;

    return (
        <button onClick={clearCompleted}>Clear Completed</button>
    );
};

export default ClearButton;