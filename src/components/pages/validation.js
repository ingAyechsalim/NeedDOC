import React, { Component } from "react";
import NavbarDocInf from "../navbar/NavbarDocInf";
import "./contact.css";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Segment,
  TextArea,
  Icon
} from "semantic-ui-react";
import Footer from "../footer/footer";

class App extends Component {
  render() {
    return (
      <div className="main_contact">
        <div>
          <NavbarDocInf />
          <div />

          <div
            style={{
              marginTop: "17%",
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
                  <Icon className="check" />
                  Prise de rendez-vous est effectuée avec succès
                </Header>
                <Form style={{ color: "teal" }} size="large">
                  <h2>Merci pour votre confiance! </h2>
                  <h2> Un mail de confirmation vous sera envoyé.</h2>
                  <h2>On vous souhaite un bon rétablissement!</h2>
                </Form>
                <div>
                  <div style={{ display: "flex", justifyContent: "center" }} />
                </div>
              </Grid.Column>
            </Grid>
          </div>
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

export default App;
