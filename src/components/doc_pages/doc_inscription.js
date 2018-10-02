import React, { Component } from "react";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";
import NavbarDocInf from "../navbar/NavbarDocInf";
import HOC from "../forms/hoc/Hoc";
import Footer from "../footer/footer";
import { Link } from "react-router-dom";
import Doctors from "../data/data_liste_doctors";

class App extends Component {
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addDoctor = () => {
    return Doctors.push(this.state);
  };
  render() {
    return (
      <div
        style={{
          backgroundColor: "#f1fff8",
          border: "2px solid transparent",
          marginTop: "2%"
        }}
      >
        <div>
          <NavbarDocInf />
        </div>

        <div
          style={{
            marginTop: "10%",
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
                Inscrivez-vous
              </Header>
              <Form size="large">
                <Segment stacked>
                  <Form.Input
                    onChange={this.onChange}
                    fluid
                    icon="user"
                    iconPosition="left"
                    placeholder="Nom Complet"
                  />
                  <Form.Input
                    fluid
                    icon="doctor"
                    iconPosition="left"
                    placeholder="Spécialité"
                    onChange={this.onChange}
                  />

                  <Form.Input
                    fluid
                    icon="key"
                    iconPosition="left"
                    placeholder="Matricule médecin"
                    type="password"
                    onChange={this.onChange}
                  />
                  <Form.Input
                    fluid
                    icon="mail"
                    iconPosition="left"
                    placeholder="Email"
                    onChange={this.onChange}
                  />
                  <Form.Input
                    fluid
                    icon="map marker alternate"
                    iconPosition="left"
                    placeholder="Adresse"
                    onChange={this.onChange}
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
                    placeholder="Vérifier votre mot de passe"
                    type="password"
                    onChange={this.onChange}
                  />

                  <Link to="/">
                    <Button color="teal" fluid size="large">
                      Inscription
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
