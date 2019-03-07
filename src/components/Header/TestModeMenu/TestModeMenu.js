import React from 'react';

import Button from '../../UI/Button/Button';

const TestModeMenu = props => {
    return (
        <Button clicked={props.clicked}>Turn Test Mode Off</Button>
    );
};

export default TestModeMenu;