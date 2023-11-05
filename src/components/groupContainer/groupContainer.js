import React from 'react'
import './groupContainer.scss'
import Card from '../../ui-elements/card/card'

const GroupContainer = ({Loading, list, title}) => {
    return(
        <div className="Group-Container">
                <div className="Group-Heading">{title}</div>
                {
                    (!Loading)?<div>Please Wait</div>:(<>{
                        list.map((ticket,index)=>{
                            return(
                                <Card key={index} id={ticket.id} title={ticket.title} tag={ticket.tag} priority={ticket.priority} />
                            )
                        })
                    }</>)
                }
            </div>
    )
}

export default GroupContainer;