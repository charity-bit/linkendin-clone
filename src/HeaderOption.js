import React from 'react';
import "./HeaderOption.css"
import {Avatar} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';


// header icons
function HeaderOption({avatar,Icon,title,click}){
    const user = useSelector(selectUser);
    return(
        <div className="headerOption" onClick={click}>
            {/*  if we get passed an icon{from props} render Icon component*/}
            {Icon && <Icon className="headerOption__icon" />}
            {/* if we get passed an avatar{from props} render the following Avatar Component */}
        {avatar && (<Avatar className="headerOption__icon" user={user?.photoUrl}
                //TO DO
                //FIX BUG HERE
            // src={user?.user.photoUrl}
            >
                         {user?.email[0]}
                </Avatar> )}
            <h3 className="headerOption__title">{title}</h3>

        </div>
    );
}

export default HeaderOption;