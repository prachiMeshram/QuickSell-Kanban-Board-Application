import React from "react";
import './card.scss';



function Card({id='no',title='',tag='',status='',priority=''}){
    return(
        <div className="Card-Container">
            <div className="Card-Id">{id}</div>
            <div className="Card-Heading">{title}</div>
            <div className="Card-Tag"><span className="Card-Priority">{priority}</span><span className="Card-Feature">{tag[0]}</span></div>
        </div>
    )
}


export default Card;