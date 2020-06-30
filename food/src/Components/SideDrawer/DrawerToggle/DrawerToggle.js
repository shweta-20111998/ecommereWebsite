import React from 'react';

import classes from './DrawerToggle.css';

const drawerToggle = (props) => (
    <button className={classes.ToggleButton} onClick={props.click}>
        <div className={classes.ToggleButtonLine}></div>
        <div className={classes.ToggleButtonLine}></div>
        <div className={classes.ToggleButtonLine}></div>
    </button>
);

export default drawerToggle;
