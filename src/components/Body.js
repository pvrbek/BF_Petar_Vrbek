import React, { Component } from "react";

class Body extends React.Component{
render(){
    return(
        <div className="body">
            <div className="b-event--top">
                <div className="b-event--top_left">
                    <div className='b-head_search'>
                        <input id='b-head_search--name' type='text' defaultValue='Dribbble Meetup, Zagre' name='eventName'/>
                        <button id='b-head_search--save'>SAVE EVENT</button>
                    </div>
                </div>
                <div className="b-event--top_right">
                    <div className='b-head_clocks'>
                        <div className='b-head_clocks--left'>
                            <div className='b-head_clocks--left_top'>5:00pm</div>
                            <div className='b-head_clocks--left_bottom'>11/25/2016</div>
                        </div>
                        <div className='b-head_clocks--right'>
                            <div className='b-head_clocks--right_top'>6:00pm</div>
                            <div className='b-head_clocks--right_bottom'>11/25/2016</div>
                        </div>
                        <div className='b-head_clocks--zone'>
                            <a>Time zone</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="b-event--middle">
                <div className="b-event--middle_left">
                    <div className="b-items_guests">
                        <h2>Add Guests</h2>
                    
                    <form className='b-items_guests--form'>

                    </form>
                    </div>
                </div>
                <div className="b-event--middle_right">
                    <ul className="b-items_choice">
                    <li className="b-items_choice--left -active"><a className='items_link--left items_link'>EVENT DETAILS</a></li>
                    <li className="b-items_choice--right"><a className='items_link'>FIND A TIME</a></li>
                    </ul>
                    <div className="b-items-details">
                        <div className="b-items-details_hline"></div>
                        <div className="b-items-details_inputs"></div>
                        <div className="b-items-details_vline"></div>
                        <div className="b-items-details_drops">
                            <div className="b-items_drops--top"></div>
                            <div className="b-items_drops--middle"></div>
                            <div className="b-items_drops-bottom"></div>
                        </div>
                        <div className="b-items-details_hline--bottom"></div>
                    </div>
                </div>
            </div>
        </div>

    );


}

}

export default Body;