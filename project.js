import React from "react";
class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
  };
 handleChange(datatestid) {
    let fields = this.state.fields;
    fields[datatestid.target.name] = datatestid.target.value;
    this.setState({
      fields
    });
  }
 submituserRegistrationForm(datatestid) {
    console.log(this.validateForm());
    
    datatestid.preventDefault();
    if (this.validateForm()) {
        console.log(this.state);
         let fields = {};
         fields["username"] = "";
         fields["emailid"] = "";
         fields["password"] = "";
        this.setState({fields:fields});
        console.log(this.state);
        alert("Form submitted Successfully");
    }
  }
  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "Please fill the column";
    }

    if ( fields["username"]) {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "Invalid username";
      }
    }

    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "Please fill the column";
    }

    if (fields["emailid"] ) {
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+))|("[\w-\s]+")([\w-]+(?:\.[\w-]+)))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "Invalid Email";
      }
    }
    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "Please Fill the password";
    }

    if (fields["password"]  ) {
      if (!fields["password"].match(/^.(?=.{8,})(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[@#$%&!]).$/)) {
        formIsValid = false;
        errors["password"] = "Password is Weak";
      }
    }
    this.setState({
      errors: errors
    });
    return formIsValid;
  }
render() {
  return (
    <>
    
    <h1 id="head">Dynamic Form</h1>
    <div id="big">
   <div id="register">
      <form method="post"  name="dynamicform"  onSubmit= {this.submituserRegistrationForm} >
      <label>Enter Your Name</label>
      <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} placeholder='Enter your Name'/>
      <div className="errorMsg">{this.state.errors.username}</div>
      <br></br>
      <label>Enter your email ID:</label>
      <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange} placeholder='Enter your email' />
      <div className="errorMsg">{this.state.errors.emailid}</div>
      <br></br>
      <label>Enter your Password:</label>
      <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} placeholder='Enter your password'/>
      <div className="errorMsg">{this.state.errors.password}</div>
      <br></br>
      <input type="submit" className="button"  value="Register"/>
      </form>
  </div>
</div>
</>
    );
}
}
export default Form