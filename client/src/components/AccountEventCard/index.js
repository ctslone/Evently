import React from "react";
import "./style.css"
import Button from 'react-bootstrap/Button'
function AccountEventCard(props){
    return (
        <div className="card accountEventCard text-center border">
            <div className="card-header">
                Your Events and Programs:
            </div>
            {props.children}
        </div>
    )
}
export default AccountEventCard