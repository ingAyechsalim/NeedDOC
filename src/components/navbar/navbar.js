import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Image } from "semantic-ui-react";
import "./nav.css";

class Navbar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;

    return (
      <div className="ui container">
        <Menu
          style={{
            height: "12%"
          }}
          color="teal"
          fixed="top"
          stackable
        >
          <Menu.Item>
            <Image
              style={{ marginTop: "10%" }}
              src={require("../assets/new.PNG")}
              size="small"
            />
          </Menu.Item>
          <Menu.Item>
            <Link className="itembar" to="/">
              Accueil
            </Link>
          </Menu.Item>

          <Menu.Menu position="right">
            <Menu.Item
              active={activeItem === "A"}
              onClick={this.handleItemClick}
            >
              <i color="teal" class="search icon" />
              <Link className="itembar" to="/recherche_doctor">
                Médecin
              </Link>
            </Menu.Item>

            <Menu.Item
              active={activeItem === "B"}
              onClick={this.handleItemClick}
            >
              <i class="search icon" />

              <Link className="itembar" to="/recherche_infirmier">
                Infirmier
              </Link>
            </Menu.Item>

            <Menu.Item
              active={activeItem === "C"}
              onClick={this.handleItemClick}
            >
              <i class="search icon" />

              <Link className="itembar" to="/recherche_Pharmacies">
                Pharmacie
              </Link>
            </Menu.Item>
            <Menu.Item
              active={activeItem === "D"}
              onClick={this.handleItemClick}
            >
              <i class="phone icon" />

              <Link className="itembar" to="/contact">
                contact
              </Link>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default Navbar;
