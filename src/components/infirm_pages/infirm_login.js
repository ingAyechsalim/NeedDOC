import React, { Component } from "react";
import NavbarDocInf from "../navbar/NavbarDocInf";
import { Button, Form, Grid, Header, Image, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import HOC from "../forms/hoc/Hoc";
import Footer from "../footer/footer";
import { connect } from "react-redux";
import * as users from "../data/users";
import { Redirect } from "react-router-dom";

class Logininf extends Component {
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
      this.state.email === users.infirmier.email &&
      this.state.password === users.infirmier.password
    ) {
      return true;
    } else {
      alert("please check your password and email!!!");
      return false;
    }
  };

  render() {
    return this.props.current_user === "infirmier" ? (
      <Redirect to="/homepage_infirmier" />
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
          className="login-form"       >
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
                    placeholder="Adresse email"
                    onChange={this.onChange}
                    name="email"
                  />
                  <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    type="password"
                    onChange={this.onChange}
                    name="password"
                  />
 >
                    <Button                      onClick={() => {
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

            marginTop: "-3%",
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
)(Logininf);
