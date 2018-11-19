import React, { Component } from "react";

class Header extends React.Component{
render(){
    return(
        <header className="header">
            <div className='h-event--first'>
                <img className="h-img-back" src="./src/images/ic-navigate-before-black-24-dp-1-x.png" alt="Navigate-Before"/>
            </div>
            <div className='h-event--middle'>
                    <div className='h-button-container'>
                        <div className='h-save-container'>
                            <button id='h-save-button'>SAVE</button>
                        </div>
                        <div className='h-discard-container'>
                            <button id='h-discard-button'>
                            <img className="h-img-discard" src="./src/images/ic-cancel-white-24-dp-1-x.png" alt="Cancel"></img>
                                <p>DISCARD</p>
                            </button>
                        </div>
                        <div className='h-delete-container'>
                            <button id='h-delete-button'>
                            <img className="h-img-delete" src="./src/images/ic-delete-white-24-dp-1-x.png" alt="Delete"></img>
                                <p>DELETE</p>
                            </button>
                        </div>
                    </div>
            </div>
            <div className='h-event--last'>
                <div className='h-event--last_notification'>
                    <img className='h-img-notif' src="./src/images/ic-notifications-none-black-24-dp-1-x.png" alt="Notification"></img>
                </div>
                <div className='h-event--last_menu'>
                    <img className='h-img-menu' src="./src/images/ic-apps-black-24-dp.png" alt="Menu"></img>
                </div>
            </div>
            <div className='h-event--arrow'>
                <img className='h-img-arrow' src="./src/images/ic-navigate-before-black-24-dp-1-x.png" alt="Menu"></img>
            </div>
            <div className='h-event--profile'>
                <img className='h-img-profile' src="./src/images/ic-navigate-before-black-24-dp-1-x.png" alt="Menu"></img>
            </div>
            <div className='h-event--search'>
                <img className='h-img-search' src="./src/images/ic-navigate-before-black-24-dp-1-x.png" alt="Menu"></img>
            </div>
        </header>

    );


}

}

export default Header;