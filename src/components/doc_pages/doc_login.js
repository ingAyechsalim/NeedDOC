import React, { Component } from "react";
import { Button, Form, Grid, Header, Image, Segment } from "semantic-ui-react";
import NavbarDocInf from "../navbar/NavbarDocInf";
import Footer from "../footer/footer";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as users from "../data/users";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
email:'',
password:''
    };}
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  verifyLoggedUser = () => {
    if (
      this.state.email === users.medecin.email &&
      this.state.password === users.medecin.password
    ) {
      return true;
    } else {
      alert("please check your password and email!!!");
      return false;
    }
  };
  render() {
    return this.props.current_user === "medecin" ? (
      <Redirect to="/homepage_doctor" />
    ) : (
      <div style={{ backgroundColor: "#f1fff8" }}>
        <div style={{ border: "12px solid transparent" }}>
          <NavbarDocInf />
        </div>
        <div
          style={{
            marginTop: "15%",
            marginLeft: "30%",
            width: " 40%",
            textAlign: "center",

            marginBottom: "15%"
          }}
          className="login-form"
        >
          <Grid textAlign="center" verticalAlign="middle">
            <Grid.Column>
              <Header as="h2" color="teal" textAlign="center">
                <i class="doctor icon" />
                connectez-vous
              </Header>
              <Form size="large">
                <Segment stacked>
                  <Form.Input
                    fluid
                    icon="user"
                    iconPosition="left"
                    placeholder="E-mail address"
                    name="email"
                    onChange={this.onChange}
                  />
                  <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={this.onChange}
                  />

     
 
                    <Button
                      onClick={() => {
                        this.verifyLoggedUser() &&
                          this.props.onLogin({
                            email: this.state.email
                          });
                      }}
                      color="teal"
                      fluid
                      size="large"
                    >
                      connexion
                    </Button>
                </Segment>
              </Form>
            </Grid.Column>
          </Grid>
        </div>

        <div
          style={{
            backgroundColor: "#5fadad",
            color: "white",
            textAlign: "center",

            marginTop: "4%",
            marginBottom: "0%"
          }}
        >
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    current_user: state.UserReducer
  };
};

const mapDispacthToProps = dispatch => {
  return {
    onLogin: user => {
      dispatch({
        type: "LOG_IN",
        userProfile: user
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispacthToProps
)(App);
