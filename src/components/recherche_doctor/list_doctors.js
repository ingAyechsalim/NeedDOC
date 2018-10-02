import React, { Component } from "react";
import Navbar from "../navbar/navbar";
import Doc_Item from "./doctor_item";
import Doctors from "../data/data_liste_doctors";
import Footer from "../footer/footer";
import "./liste_doc.css";
import { Image } from "semantic-ui-react";
class List_doctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DoctorsToDisplay: Doctors,
      Adresse: this.props.adresse,
      Categorie:this.props.categorie
    };
    console.log(this.state.Categorie)
  }
  DoctorsFiltred = () => {
    return this.state.DoctorsToDisplay.filter(el =>
      el.adresse
        .toLocaleLowerCase()
        .includes(this.state.Adresse.toLocaleLowerCase().trim()
      )&&el.categorie
      .toLocaleLowerCase()
      .includes(this.state.Categorie.toLocaleLowerCase().trim()
    )
    );
  };

  render() {
    return (
      <div className="doc_container">
        <div>
          <Navbar />
        </div>

        <div className="list_doc">
          <div className="title">
            <h1>Liste des médecins: {this.state.Categorie}  disponibles à : {this.state.Adresse} sont: </h1>
          </div>
          <div className="list-doctors">
            {this.DoctorsFiltred().map((el, i) => (
              <Doc_Item key={i} doctor={el} />
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

export default List_doctor;
