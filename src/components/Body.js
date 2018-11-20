import React, { Component } from "react";

class Body extends React.Component{
render(){
    return(
        <div className="body">
            <div className="b-event--top">
                <div className="b-event--top_left">
                    <div className='b-head_search'>
                        <input id='b-head_search--name' type='text' defaultValue='Dribbble Meetup, Zagre' name='eventName'></input>
                        <button id='b-head_search--save'>SAVE EVENT</button>
                    </div>
                    <div className="b-head_checkbox">
                            <div className='first'><input id='b-check_all' name='b-check_all' type='checkbox'></input><label className='check--label'>All day</label></div>
                            <div className='last'><input id='b-check_repeat' name='b-check_repeat' type='checkbox'></input><label className='check--label'>Repeat</label></div>
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
                        <div className='b-items_guests--form_add'>
                            <input id='b-add_input' type='text'></input>
                            <button id='b-add_button'>ADD</button>
                        </div> 
                        <div className='b-items_guests--form_checkbox'>
                            <div className='first'><input id='b-check_invite' name='b-check_invite' type='checkbox'></input><label className='check--label'>Invite others</label></div>
                            <div className='middle'><input id='b-check_modify' name='b-check_modify' type='checkbox'></input><label className='check--label'>Modify event</label></div>
                            <div className='last'><input id='b-check_guest' name='b-check_guest' type='checkbox'></input><label className='check--label'>Guest list</label></div>
                        </div>
                        <div className='b-items_guests--form_drop'>
                                <div className='b-drop_container'>
                                    <select id='b-drop_container--left'>
                                        <option value='Public'>Public</option>
                                        <option value='Private'>Private</option>
                                        <option value='Default'>Default</option>
                                    </select>
                                    <select id='b-drop_container--right'>
                                        <option value='More actions'>More actions</option>
                                        <option value='Repeating'>Repeating</option>
                                        <option value='Temporary'>Temporary</option>
                                    </select>
                                </div>
                        </div> 
                        <div className='b-items_guests--form_disclaimer'>
                            <p>
                            By default this event will follow the 
                            sharing settings of this calendar: event 
                            details will be visible to anyone who can 
                            see details of other events in this calendar.</p>
                        </div>
                        <div className='b-items_guests--form_publish'>
                            <button id='b-button_publish'>Publish event</button>
                        </div>
                    </form>
                    </div>
                </div>
                <div className="b-event--middle_right">
                    <ul className="b-items_choice">
                        <li className="b-items_choice--left -active"><a className='items_link--left items_link'>EVENT DETAILS</a></li>
                        <li className="b-items_choice--right"><a className='items_link'>FIND A TIME</a></li>
                    </ul>
                    <div className="b-items-details">
                        <div className="b-items-details_inputs">
                            <h3 className='b-text_location'>Where</h3>
                            <div className='b-input_location'>
                                <input id='b-input_location--id' placeholder='Enter Location of your event' type='text'></input>
                            </div>
                            <h3 className='b-text_description'>Description</h3>
                            <div className='b-input_description'>
                                <textarea id='b-input_description--id' type='text'></textarea>
                            </div>
                        </div>
                        <div className="b-items-details_drops">
                            <div className="b-items-details_drops--top">
                            
                            </div>
                            <div className="b-items-details_drops--middle">
                            
                            </div>
                            <div className="b-items-details_drops-bottom">
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );


}

}

export default Body;