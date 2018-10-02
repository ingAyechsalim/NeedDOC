import React, { Component } from "react";
import Navbar from "../navbar/navbar";
import Phar_Item from "./pharmacie_item";
import Pharmacies from "../data/data_liste_pharmacie";
import "./liste_phar.css";
class List_doctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pharmaciesToDisplay: Pharmacies,
      Adresse: this.props.adresse
    };
  }
  PharmaciesFiltred = () => {
    return this.state.pharmaciesToDisplay.filter(el =>
      el.adresse
        .toLocaleLowerCase()
        .includes(this.state.Adresse.toLocaleLowerCase().trim())
    );
  };
  render() {
    return (
      <div style={{ backgroundColor: "#f1fff8" }}>
        <div>
          <Navbar />
        </div>
        <div style={{ marginTop: "10%", marginLeft: "3%" }}>
          <div className="title">
            <h1>Liste des pharmacies disponibles </h1>
          </div>

          <div className="list-doctors">
            {this.PharmaciesFiltred().map((el, i) => (
              <Phar_Item key={i} pharmacie={el} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default List_doctor;
