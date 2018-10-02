import React, { Component } from "react";
import { Button, Form, Header, Segment, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/navbar";
import "./liste_phar.css";
import Footer from "../footer/footer";

export default class Search_Pharmacie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adresse: " "
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div style={{ backgroundColor: "#f1fff8" }}>
        <div>
          <Navbar />
        </div>
        <div
          style={{
            marginTop: "18%",
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
                <i class="doctor icon" /> Trouver une Pharmacie
              </Header>
              <Form size="large">
                <Segment stacked>
                  <Form.Input
                    onChange={this.onChange}
                    name="adresse"
                    fluid
                    icon="search"
                    iconPosition="left"
                    placeholder="Adresse"
                  />

                  <Link to={`/lists_pharmacies/${this.state.adresse}`}>
                    <Button color="teal" fluid size="large">
                      <i className="icon search " /> Rechercher
                    </Button>
                  </Link>
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

            marginBottom: "0%"
          }}
        >
          <Footer />
        </div>
      </div>
    );
  }
}
