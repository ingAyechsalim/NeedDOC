import React, { Component } from "react";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/navbar";
import "./styles.css";
import Footer from "../footer/footer";
class SearchDoc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adresse: " ",
      categorie: " "
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="main">
        <div>
          <Navbar />
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
               <i class="doctor icon" /> Trouver un médecin
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
                  <Form.Input
                    onChange={this.onChange}
                    name="categorie"
                    fluid
                    icon="search"
                    iconPosition="left"
                    placeholder="Spécialité"
                  />

                  <Link to={`/lists_doctors/${this.state.adresse}/${this.state.categorie}`}>
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

export default SearchDoc;
