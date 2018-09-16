import React, { Component } from 'react';
import './App.css';
import UserSummary from './components/UserSummaryComponent';
import Service from './assets/Service';

class App extends Component {

  Users = [];

  constructor(props) {
    super(props);
    this.state = {
      'Users': []
    }
  }

  componentDidMount() {

    let service = new Service();
    service.fetchUsers(10)
      .then(response => response.json())
      .then(data => this.displayUsers(data.results));
    // User.fetchUsers(10)
    //   .then(response => response.json())
    //   .then(data => this.displayUsers(data.results));
  }

  displayUsers(response) {

    this.Users = response;
    this.setState({ Users: this.Users })
  }


  render() {

    var users = [];

    for (var i = 0; i < this.state.Users.length; i++) {

      var keyForForm = i;
      var dataToPass = this.state.Users[i];

      users.push(
        <UserSummary key={keyForForm} User={dataToPass} />
      );
    }
    return (
      <div className="App">
        <h1 className="text-secondary display-4"> User List </h1>

        <div className="list-group py-3 User-List-Container" >
          {users}
        </div>


      </div>

    );
  }
}

export default App;
