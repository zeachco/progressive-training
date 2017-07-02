import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   name: "Ammar"
    // }
    this.state = {};
    this.getData = this.getData.bind(this);
    this.sendData = this.sendData.bind(this);
    this.updateData = this.updateData.bind(this);
    this.deleteData = this.deleteData.bind(this);
  }

  componentDidMount() {

  }

  getData() {
    axios.get('http://localhost:8080/api/times')
      .then(response => {
        let data = response.data;
        this.setState({ data });
        console.log(this.state.data);
      });
  }

  sendData(userData) {
    axios.post('http://localhost:8080/api/times', userData)
      .then(response => {
        console.log(response);
      })
  }

  updateData(userData) {
    axios.put('http://localhost:8080/api/times?id=' + userData['id'] + '&name=' + userData['name'])
      .then(response => {
        console.log(response);
      })
  }

  deleteData(userData) {
    axios.delete('http://localhost:8080/api/times/' + userData)
      .then(response => {
        console.log(response);
      })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/*<h2>{welcomeMsg()}</h2>*/}
          <WelcomeUser name="Ammar" />
          {/*<h2>Hey {this.state.data.name}, Welcome to REact learning</h2>*/}

          <button type="btn" className="btn btn-primary" onClick={this.getData}>Fetch Data</button>
          {/*<TableData />*/}
          <div className="medium-space"></div>
          <div className="clearfix"></div>
          <button type="btn" className="btn btn-primary" onClick={() => this.sendData({ "name": "Dan", "role": "Manager" })}>Send Data</button>
          <div className="medium-space"></div>
          <div className="clearfix"></div>
          <button type="btn" className="btn btn-primary" onClick={() => this.updateData({ "id": 4, "name": "John" })}>Update Data</button>
          <div className="medium-space"></div>
          <div className="clearfix"></div>
          <button type="btn" className="btn btn-primary" onClick={() => this.deleteData('4')}>Delete Data</button>

        </div>
      </div>
    );
  }
}

// function welcomeMsg() {
//   return "Welcome to REact"
// }

function WelcomeUser(props) {
  return <h2>Hey {props.name}, Welcome to REact learning</h2>;
}

class TableData extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8080/api/times')
      .then(response => {
        let data = response.data;
        this.setState({ data });
        console.log(this.state.data);
      });
  }

  render() {
    return (
      <BootstrapTable data={this.state.data}>
        <TableHeaderColumn dataField='id' isKey={true}>Emp Id</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Employee Name</TableHeaderColumn>
        <TableHeaderColumn dataField='role'>Employee Role</TableHeaderColumn>
      </BootstrapTable>
    )
  }
}

export default App;
