import React, { Component } from "react";
import Axios from "axios";

class Body extends React.Component{
    
        state = {
            eventName: null,
            addGuest:null,
            checkAll:false,
            checkRepeat:false,
            checkInvite:false,
            checkModify:false,
            checkPublish:false,
            pickPrivacy:'Public',
            pickRepeating:'More actions',
            location: null,
            description:null,
            notifBy:'Email',
            notifTime:'Minutes',
            notifNum:null,
            calUser:'Mario Šestak',
            calRole:'Show me as',
            bornfightAPI:[]

        };
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        if (localStorage.getItem('pickPrivacy')===null){
        localStorage.setItem('pickPrivacy',this.state.pickPrivacy);}
        if (localStorage.getItem('pickRepeating') === null) {
        localStorage.setItem('pickRepeating', this.state.pickRepeating);}
        if (localStorage.getItem('notifBy') === null) {
        localStorage.setItem('notifBy', this.state.notifBy);}
        if (localStorage.getItem('notifTime') === null) {
        localStorage.setItem('notifTime', this.state.notifTime);}
        if (localStorage.getItem('calUser') === null) {
        localStorage.setItem('calUser', this.state.calUser);}
        if (localStorage.getItem('calRole') === null) {
        localStorage.setItem('calRole', this.state.calRole);}
        Axios.get('http://deghq.com/yapp/front-labs/jfed112018/data.json')
        .then(res => {
            const brnfght = res.data;
            this.setState({bornfightAPI:brnfght});
        })
    }
    handleChange = () => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
        localStorage.setItem(name,value);
    }
    publish = () => {
        alert("Notifications: " + this.state.calRole);
        event.preventDefault();
    }
render(){
    return(
        <div className="body">
            <div className="b-event--top">
                <div className="b-event--top_left">
                    <div className='b-head_search'>
                        <input id='b-head_search--name' type='text' defaultValue='Dribbble Meetup, Zagre' name='eventName' onChange={this.handleChange}></input>
                        <button id='b-head_search--save' onClick={this.publish}>SAVE EVENT</button>
                    </div>
                    <div className="b-head_checkbox">
                            <div className='first'><input id='b-check_all' name='checkAll' type='checkbox' onChange={this.handleChange}></input><label className='check--label'>All day</label></div>
                        <div className='last'><input id='b-check_repeat' name='checkRepeat' type='checkbox' onChange={this.handleChange}></input><label className='check--label'>Repeat</label></div>
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
                            <input id='b-add_input' type='text' name='addGuest' onChange={this.handleChange}></input>
                            <button id='b-add_button' type="button" onClick={this.publish}>ADD</button>
                        </div> 
                        <div className='b-items_guests--form_checkbox'>
                                <div className='first'><input id='b-check_invite' name='checkInvite' type='checkbox' onChange={this.handleChange}></input><label className='check--label'>Invite others</label></div>
                                <div className='middle'><input id='b-check_modify' name='checkModify' type='checkbox' onChange={this.handleChange}></input><label className='check--label'>Modify event</label></div>
                                <div className='last'><input id='b-check_guest' name='checkGuest' type='checkbox' onChange={this.handleChange}></input><label className='check--label'>Guest list</label></div>
                        </div>
                        <div className='b-items_guests--form_drop'>
                                <div className='b-drop_container'>
                                    <select id='b-drop_container--left' name='pickPrivacy' defaultValue={this.defVal} onChange={this.handleChange}>
                                        {this.state.bornfightAPI.eventType && this.state.bornfightAPI.eventType.map(
                                            (bf,index) => <option value={bf} key={index}>{bf}</option>
                                        )
                                        }
                                    </select>
                                    <select id='b-drop_container--right' name='pickRepeating' onChange={this.handleChange}>
                                        {this.state.bornfightAPI.moreActions && this.state.bornfightAPI.moreActions.values.map(
                                            (values, index) => <option value={values} key={index}>{values}</option>
                                        )}
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
                            <button id='b-button_publish' onClick={this.publish}>Publish event</button>
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
                                <input id='b-input_location--id' name='location' onChange={this.handleChange} placeholder='Enter Location of your event' type='text'></input>
                            </div>
                            <h3 className='b-text_description'>Description</h3>
                            <div className='b-input_description'>
                                <textarea id='b-input_description--id' name='description' type='text' onChange={this.handleChange}></textarea>
                            </div>
                        </div>
                        <div className="b-items-details_drops">
                            <div className="b-items-details_drops--top">
                                <h3 className='b-text_notification'>Notifications</h3>
                                <div className='b-input_container'>
                                    <div className='b-input_container--first'>
                                        <select id='b-drop_first' name='notifBy'  onChange={this.handleChange}>
                                                {this.state.bornfightAPI.notifications && this.state.bornfightAPI.notifications.type.map(
                                                    (values, index) => <option value={values} key={index}>{values}</option>
                                                )}
                                        </select>
                                    </div>
                                    <input id='b-input_container--middle' name='notifNum' onChange={this.handleChange}></input>
                                    <div className='b-input_container--last'>
                                        <select id='b-drop_last' name='notifTime' onChange={this.handleChange}>
                                            {this.state.bornfightAPI.notifications && this.state.bornfightAPI.notifications.time.map(
                                                (values, index) => <option value={values} key={index}>{values}</option>
                                            )}
                                        </select>
                                    </div>
                                    <div className='b-input_container--remove'></div>
                                    <div className='b-input_container--add'>+ Add a notification</div>
                                </div>
                                
                            
                            </div>
                            <div className="b-items-details_drops--middle">
                                <h3 className='b-text_calendar'>Calendar</h3>
                                    <div className='b-drop_container'>
                                    <select id='b-drop_users' name='calName' onChange={this.handleChange}>
                                        {this.state.bornfightAPI.calendar && this.state.bornfightAPI.calendar.users.map(
                                            (values, index) => <option value={values} key={index}>{values}</option>
                                        )}
                                    </select>
                                    <select id='b-drop_show' name='calRole' onChange={this.handleChange}>
                                        {this.state.bornfightAPI.calendar && this.state.bornfightAPI.calendar.showAs.values.map(
                                            (values, index) => <option value={values} key={index}>{values}</option>
                                        )}
                                    </select></div>
                            </div>
                            <div className="b-items-details_drops--bottom">
                                <h3 className='b-text_color'>Event color</h3>
                                <div className='b-color_container'>
                                    <div className='b-color--one'><div></div></div>
                                    <div className='b-color--two'><div></div></div>
                                    <div className='b-color--three'><div></div></div>
                                    <div className='b-color--four'><div></div></div>
                                    <div className='b-color--five'><div></div></div>
                                    <div className='b-color--six'><div></div></div>
                                    <div className='b-color--seven'><div></div></div>
                                </div>
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