import { connect } from "react-redux";

import React, { Component } from "react";
import {
  Button,
  Icon,
  Menu,
  Segment,
  Sidebar,
  Card,
  Image
} from "semantic-ui-react";
import { Redirect, Link } from "react-router-dom";
import Rndvs from "../data/data_liste_RDV";
import Rndv_Item from "../RDV_item/RDV_item";
import "./doc_home.css";
class Homedoc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rndvsToDisplay: Rndvs,
      visible: false
    };
  }

  handleButtonClick = () => this.setState({ visible: !this.state.visible });

  handleSidebarHide = () => this.setState({ visible: false });

  render() {
    const { visible } = this.state;

    return this.props.current_user !== "medecin" ? (
      <Redirect to="/logindoctor" />
    ) : (
      <div>
        <Sidebar.Pushable className="sidebar1" as={Segment}>
          <Button onClick={this.handleButtonClick}>
            <Icon circular inverted color="teal" name="sidebar" />
          </Button>
          <Sidebar
            as={Menu}
            animation="overlay"
            icon="labeled"
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width="thin"
          >
            <Menu.Item as="a">
              <Image
                style={{ marginTop: "10%" }}
                src={require("../assets/new.PNG")}
                size="small"
              />
            </Menu.Item>

            <Link to="/">
              <Menu.Item as="a">
                <Icon name="home" color="teal" />
                Accueil
              </Menu.Item>
            </Link>
            <Menu.Item as="a">
              <Icon name="user" color="teal" />
              Profil
            </Menu.Item>
            <Link to="/">
              <Menu.Item as="a">
                <Icon name="sign-out" color="teal" />
                Déconnexion
              </Menu.Item>
            </Link>
          </Sidebar>
          <div className="card-list">
            <Sidebar.Pusher dimmed={visible}>
              <Segment basic>
                <Card.Group>
                  <div className="liste_rndvs">
                    <h2 className="title">Liste des rendez-vous :</h2>
                    {this.state.rndvsToDisplay.map((el, i) => (
                      <Rndv_Item key={i} rndv={el} />
                    ))}
                  </div>
                </Card.Group>
              </Segment>
            </Sidebar.Pusher>
            <div className="doc-card">
              <Card
                image={require("./doc.jpg")}
                header=" Dr Mohamed Ben Salah"
                meta="Médecin Généraliste"
                description=" Sousse"
              />
            </div>
          </div>
        </Sidebar.Pushable>
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
  return {};
};
export default connect(
  mapStateToProps,
  mapDispacthToProps
)(Homedoc);
