import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import WorkInfoForm from './components/work-info-form';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      "NoOfForms": 0,
      "FormData": []
    };
  }

  submitPressed = () => {
    
    var string = "";
    for (var i = 0; i < this.state.FormData.length; i++) {
      string += "Form: " + (i +1) + " Email Address: " + this.state.FormData[i].Email + " Password: " + this.state.FormData[i].Password + "\n";
    }

    alert(string);
  }

  addForm = () => {

    var forms = this.state.FormData;
    forms.push({});
    this.setState({ FormData: forms });

  }

  resetForm = () => {

    this.setState({ FormData: [] })

  }

  render() {

    var forms = [];

    for (var i = 0; i < this.state.FormData.length; i++) {

      var keyForForm = i;
      var dataToPass = this.state.FormData[i];

      forms.push(
        <WorkInfoForm key={keyForForm} data={dataToPass} identifier = {keyForForm}  />
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div>

          <button type="button" className="Button-margin btn btn-default" aria-label="Left Align" onClick={this.addForm} >
            <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
            Click to add form
            </button>
          {
            this.state.FormData.length > 0 && <button type="button" className="Button-margin btn btn-default" aria-label="Left Align" onClick={this.resetForm}>
              <span className=" glyphicon glyphicon-remove" aria-hidden="true"></span>
              Remove all forms
        </button>
          }


        </div>

        <div>
          {forms}
        </div>

        {
          this.state.FormData.length > 0 &&
          <button type="button" className="btn btn-primary" onClick={this.submitPressed}>Submit</button>
        }
      </div>
    );
  }

}

export default App;