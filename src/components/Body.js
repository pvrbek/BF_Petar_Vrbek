import React, { Component } from "react";

class Body extends React.Component{
render(){
    return(
        <div className="body">
            <div className="b-event--top">
            </div>
            <div className="b-event--middle">
                <div className="b-event--middle_left">
                    <div className="b-items_guests"></div>
                    <div className="b-items_line"></div>
                    <div className="b-items_publish"></div>
                </div>
                <div className="b-event--middle_right">
                    <ul className="b-items_choice">
                    <li className="b-items_choice--left -active"><a className='items_link--left items_link'>EVENT DETAILS</a></li>
                    <li className="b-items_choice--right"><a className='items_link'>FIND A TIME</a></li>
                    </ul>
                    <div className="b-items_hline"></div>
                    <div className="b-items-details">
                        <div className="b-items-details_inputs"></div>
                        <div className="b-items-details_vline"></div>
                        <div className="b-items-details_drops">
                            <div className="b-items_drops--top"></div>
                            <div className="b-items_drops--middle"></div>
                            <div className="b-items_drops-bottom"></div>
                        </div>
                    </div>
                    <div className="b-items_hline--bottom"></div>
                </div>
            </div>
        </div>

    );


}

}

export default Body;