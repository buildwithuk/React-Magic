import React, { Component } from 'react';

class UserSummary extends Component {

    constructor(props) {

        super(props);
        this.User = props.User;
    }

    render() {
        console.log(this.User);
        let address = this.User.location.street + ", " + this.User.location.city + ", " + this.User.location.city;

        return (

            <a href="#" className="list-group-item list-group-item-action align-items-start">

                <div className="d-flex w-100 justify-content-between">
                    <img src={this.User.picture.thumbnail}></img>
                    <h5 className="mb-1"> {this.User.name.first + " " + this.User.name.last} </h5>
                    <small> {this.User.nat} </small>                    
                </div>
                <p className="mb-1"> {address} </p>
                <small><b>Email:</b> {this.User.email}</small>
            </a>
        )
    }

}

export default UserSummary;