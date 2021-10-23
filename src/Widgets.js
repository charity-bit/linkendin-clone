import { Info,FiberManualRecord } from '@material-ui/icons';
import React from 'react';
import "./Widgets.css";

const Widgets = () =>{
const newsArticle = (heading,subtitle) =>{
    return(
<div className="widgets__article">
    <div className="widgets__articleLeft">
        <FiberManualRecord />
    </div>
    <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
    </div>

</div>

    )

}   
 return(
<div className="widgets">
    <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <Info />
    </div>
    {newsArticle("MICROSOFT","microsoft's new big plan - 999 readers")}
    {newsArticle("COVID-19","Corona virus Kenya updates - 500 readers")}
    {newsArticle("TESLA","Elon's plan for Tesla - 3000 readers")}
    {newsArticle("Bitcoin breaks $22k","Crypto - 8000 readers")}
    {newsArticle("Is Redux too good?","Code - 8000 readers")}


</div>

    );
}

export default Widgets;