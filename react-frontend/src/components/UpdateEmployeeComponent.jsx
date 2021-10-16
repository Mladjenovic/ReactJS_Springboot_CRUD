import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class UpdateEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.match.params.id, // getting the Id from the route
      firstName: "",
      lastName: "",
      emailId: "",
    };

    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeEmailAddressHandler = this.changeEmailAddressHandler.bind(this);
    this.updateEmployee = this.updateEmployee.bind(this);
  }

  componentDidMount() {
    EmployeeService.getEmployeeById(this.state.id).then((res) => {
      let employee = res.data;
      this.setState({
        firstName: employee.firstName,
        lastName: employee.lastName,
        emailId: employee.emailId,
      });
    });
  }

  changeFirstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };

  changeLastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };

  changeEmailAddressHandler = (event) => {
    this.setState({ emailId: event.target.value });
  };

  updateEmployee = (e) => {
    e.preventDefault();
    let employee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId,
    };
    console.log("employee => " + JSON.stringify(employee));

    EmployeeService.updateEmployee(employee, this.state.id).then((res) => {
      this.props.history.push("/employees");
    });
  };

  cancel() {
    this.props.history.push("/employees");
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-ms-3">
              <h3 className="text-center">Add Employee</h3>
              <div className="card-body">
                <form action="">
                  <div className="form-group">
                    <label>First name: </label>
                    <input
                      placeholder="FirstName"
                      name="firstName"
                      className="form-control"
                      value={this.state.firstName}
                      onChange={this.changeFirstNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Last name: </label>
                    <input
                      placeholder="LastName"
                      name="lastName"
                      className="form-control"
                      value={this.state.lastName}
                      onChange={this.changeLastNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email address: </label>
                    <input
                      placeholder="EmailAddress"
                      name="emailId"
                      className="form-control"
                      value={this.state.emailId}
                      onChange={this.changeEmailAddressHandler}
                    />
                  </div>
                  <button
                    className="btn btn-success"
                    onClick={this.updateEmployee}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-success"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateEmployeeComponent;
