import React, { Component } from "react";
import Navbar from "../navbar/navbar";
import { Button, Form, Grid, Header, Image, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import HOC from "../forms/hoc/Hoc";
import Footer from "../footer/footer";
import Rndvs from "../data/data_liste_RDVP";

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
            marginTop: "11%",
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
                Prendre Rendez-Vous avec votre Infirmier
              </Header>
              <Form size="large">
                <Segment stacked>
                  <Form.Input
                    fluid
                    icon="user"
                    iconPosition="left"
                    placeholder="Nom Complet"
                    onChange={this.onChange}
                    name="nom"
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
                    placeholder="email"
                    onChange={this.onChange}
                    name="email"
                  />
                  <Form.Input
                    fluid
                    icon="map marker alternate"
                    iconPosition="left"
                    placeholder="Adresse"
                    onChange={this.onChange}
                    name="adresse"
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
