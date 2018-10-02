import React, { Component } from "react";
import Navbar from "../navbar/navbar";
import { Button, Form, Grid, Header, Image, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import HOC from "../forms/hoc/Hoc";

import Footer from "../footer/footer";
import Rndvs from "../data/data_liste_RDV";

class App extends Component {
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  addRdv = () => {
    return Rndvs.push(this.state);
  };
  render() {
    return (
      <div style={{ backgroundColor: "#f1fff8" }}>
        <div>
          <Navbar />
        </div>
        <div
          style={{
            marginTop: "12%",
            marginLeft: "30%",
            width: " 40%",
            textAlign: "center",
            marginBottom: "10%"
          }}
          className="login-form"
        >
          <Grid textAlign="center" verticalAlign="middle">
            <Grid.Column>
              <Header as="h2" color="teal" textAlign="center">
                <i class="doctor icon" />
                Prendre Rendez-Vous
              </Header>
              <Form size="large">
                <Segment stacked>
                  <Form.Input
                    fluid
                    icon="user"
                    name="nom"
                    iconPosition="left"
                    placeholder="Nom Complet"
                    onChange={this.onChange}
                  />
                  <Form.Input
                    fluid
                    icon="phone"
                    iconPosition="left"
                    placeholder="télephone"
                    onChange={this.onChange}
                    name="phone"
                  />
                  <Form.Input
                    fluid
                    icon="mail"
                    iconPosition="left"
                    placeholder="E-mail address"
                    onChange={this.onChange}
                    name="email"
                  />
                  <Form.Input
                    type="date"
                    name="date"
                    fluid
                    icon="calendar alternate outline"
                    iconPosition="left"
                    placeholder="choisir la date"
                    onChange={this.onChange}
                  />
                  <Form.Input
                    type="time"
                    name="time"
                    fluid
                    icon="time"
                    iconPosition="left"
                    placeholder="choisir l'heure"
                    onChange={this.onChange}
                  />
                  <Segment>
                    <Link to="/validation">
                      <Button
                        color="teal"
                        fluid
                        size="large"
                        onClick={this.addRdv}
                      >
                        valider
                      </Button>
                    </Link>
                  </Segment>
                </Segment>
              </Form>
            </Grid.Column>
          </Grid>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default HOC(App);
