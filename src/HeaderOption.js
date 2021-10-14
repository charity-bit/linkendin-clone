import React from 'react';
import "./HeaderOption.css"
import {Avatar} from '@material-ui/core';


// header icons
function HeaderOption({avatar,Icon,title}){
    return(
        <div className="headerOption">
            {/*  if we get passed an icon{from props} render Icon component*/}
            {Icon && <Icon className="headerOption__icon" />}
            {/* if we get passed an avatar{from props} render the following Avatar Component */}
            {avatar && <Avatar className="headerOption__icon" src={avatar} /> }
            <h3 className="headerOption__title">{title}</h3>

        </div>
    );
}

export default HeaderOption;