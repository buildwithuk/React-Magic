import React, { Component } from 'react';

class WorkInfoForm extends Component {

    emailInputId = "";
    passwordInputId = "";

    constructor(props) {

        super(props);
        this.emailInputId = "Email-" + props.identifier;
        this.passwordInputId = "Password-" + props.identifier;
    }

    onEmailChanged = () => {
        this.props.data.Email = document.getElementById(this.emailInputId).value;

    }

    onPasswordChanged = () => {
        this.props.data.Password = document.getElementById(this.passwordInputId).value;

    }

    render() {

        return (

            <div className="Form-container">
                <div className="Controls-container">
                    <label htmlFor="email">Email address</label>
                    <input onChange={this.onEmailChanged} type="email" className="form-control" id={this.emailInputId} placeholder="Enter email" />
                </div>
                <div className="Controls-container">
                    <label htmlFor="password">Password</label>
                    <input onChange={this.onPasswordChanged} type="password" className="form-control" id={this.passwordInputId} placeholder="Password" />
                </div>

            </div>
        )
    }
}

export default WorkInfoForm;