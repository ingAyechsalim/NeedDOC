import React, { Component } from "react";
import Navbar from "../navbar/navbar";
import Infirmier_Item from "./infirmier_item";
import Infirmiers from "../data/data_liste_infirmiers";
import Footer from "../footer/footer";

import "./list_infirmier.css";
class List_infirmier extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infirmiersToDisplay: Infirmiers,
      Adresse: this.props.adresse

    };}
  InfirmiersFiltred = () => {
    return this.state.infirmiersToDisplay.filter(el =>
      el.adresse
        .toLocaleLowerCase()
        .includes(this.state.Adresse.toLocaleLowerCase().trim())
    );
  };
  render() {
    return (
      <div className="main">
        <div>
          <Navbar />
        </div>

        <div style={{ marginTop: "10%" }}>
          <div className="title">
            <h1>Liste des Infirmiers à domicile disponibles </h1>
          </div>
          <div className="list-infirmiers">
            {this.InfirmiersFiltred().map((el, i) => (
              <Infirmier_Item key={i} infirimier={el} />
            ))}
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default List_infirmier;
