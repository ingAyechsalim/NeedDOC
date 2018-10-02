import React, { Component } from "react";
import NavbarDocInf from "../navbar/NavbarDocInf";
import ModalContact from "../forms/modal/Modal";
import './contact.css'
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Segment,
  TextArea
} from "semantic-ui-react";


class App extends Component {
  render() {
    return (
      <div className='main_contact'>
        <div>
          <NavbarDocInf />
          <div />

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
                  Contactez-nous
                </Header>
                <Form size="large">
                  <Segment stacked>
                    <Form.Input
                      fluid
                      icon="user"
                      iconPosition="left"
                      placeholder="Nom et Prénom"
                    />
                    <Form.Input
                      fluid
                      icon="lock"
                      iconPosition="left"
                      placeholder="Fonction"
                    />
                    <Form.Input
                      fluid
                      icon="mail"
                      iconPosition="left"
                      placeholder="Email"
                    />
                    <TextArea
                      fluid
                      icon="comment outline"
                      iconPosition="left"
                      placeholder="Tapez votre message..."
                    />
                    <ModalContact />
                  </Segment>
                </Form>
                <div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Header
                      as="h2"
                      color="teal"
                      textAlign="center"
                      style={{ marginTop: "10%" }}
                    >
                      Rejoignez-nous sur :
                    </Header>
                    <div style={{ marginTop: "10%", marginLeft: "2%" }}>
                      <Button circular color="facebook" icon="facebook" />
                      <Button circular color="twitter" icon="twitter" />
                      <Button circular color="linkedin" icon="linkedin" />
                    </div>
                  </div>
                </div>
              </Grid.Column>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
