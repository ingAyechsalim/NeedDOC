import React, { Component } from "react";
import Navbar2 from "../navbar/NavbarDocInf";
import { Button, Form, Grid, Header, Image, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import HOC from "../forms/hoc/Hoc";
import Infirmiers from "../data/data_liste_infirmiers";
import "./infirmier_home.css";

class App extends Component {
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addInfiermier = () => {
    return Infirmiers.push(this.state);
  };
  render() {
    console.log(Infirmiers);
    return (
      <div style={{ backgroundColor: "#f1fff8" }}>
        <Navbar2 />

        <div
          style={{
            marginTop: "10%",
            marginLeft: "30%",
            width: " 40%",
            textAlign: "center"
          }}
          className="login-form"
        >
          <Grid textAlign="center" verticalAlign="middle">
            <Grid.Column>
              <Header as="h2" color="teal" textAlign="center">
                <i class="doctor icon" />
                inscription de votre Compte
              </Header>
              <Form size="large">
                <Segment stacked>
                  <Form.Input
                    onChange={this.onChange}
                    name="nom"
                    fluid
                    icon="user"
                    iconPosition="left"
                    placeholder="nom complet"
                  />
                  <Form.Input
                    onChange={this.onChange}
                    name="mail"
                    fluid
                    icon="adresse"
                    iconPosition="left"
                    placeholder="address Email"
                  />
                  <Form.Input
                    onChange={this.onChange}
                    name="phone"
                    fluid
                    icon="phone"
                    iconPosition="left"
                    placeholder="telephone"
                  />
                  <Form.Input
                    onChange={this.onChange}
                    name="image"
                    fluid
                    icon="download"
                    iconPosition="left"
                    placeholder="url image de profil"
                  />
                  <Form.Input
                    onChange={this.onChange}
                    name="adresse"
                    fluid
                    icon="location arrow"
                    iconPosition="left"
                    placeholder="emplacement"
                  />

                  <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Mot de passe"
                    type="password"
                    onChange={this.onChange}
                  />
                  <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="nouveau mot de Passe"
                    type="password"
                    onChange={this.onChange}
                  />
                  <Link to="/">
                    {" "}
                    <Button
                      onClick={this.addInfiermier}
                      color="teal"
                      fluid
                      size="large"
                    >
                      inscription
                    </Button>
                  </Link>
                </Segment>
              </Form>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    );
  }
}

export default HOC(App);
