import React, { Component } from "react";
import { Route } from "react-router-dom";
import Homepage from "./components/homepage";
// form login to different users
import Logindoctor from "./components/doc_pages/doc_login";
import Logininfirmier from "./components/infirm_pages/infirm_login";
//inscription form for differents users
import Inscriptioninfirmier from "./components/infirm_pages/infirm_inscription";
import Inscriptiondoctor from "./components/doc_pages/doc_inscription";
//contact form
import Contact from "./components/pages/contact";
// search form for pharmacies,docter,infirmiers
import Validation from "./components/pages/validation";

// validation message
import Pharmacies from "./components/Pharmacies/pharmacies";
import Recherche_doctor from "./components/recherche_doctor/recherche_doc";
import Recherche_infirmier from "./components/recherche_infirmier/recherche_infir";
//form de RNDV
import Consultation_infirmier from "./components/consultations/consultation_infirmier";
import Consultation_doctor from "./components/consultations/consultations_doc";
//lists doctors and Pharmacies infirmiers
import Lists_doctors from "./components/recherche_doctor/list_doctors";
import Lists_infirmiers from "./components/recherche_infirmier/list_infirmier";
import Lists_pharmacies from "./components/Pharmacies/list_pharmacies";
//home paages
import DoctorHome from "./components/doc_pages/doc_home";
import InfirmierHome from "./components/infirm_pages/infirm_home";

class Routeapp extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => <Homepage />} />
        <Route exact path="/logindoctor" render={() => <Logindoctor />} />
        <Route exact path="/contact" render={() => <Contact />} />
        <Route
          exact
          path="/recherche_Pharmacies"
          render={() => <Pharmacies />}
        />
        <Route
          exact
          path="/recherche_doctor"
          render={() => <Recherche_doctor />}
        />
        <Route
          exact
          path="/recherche_infirmier"
          render={() => <Recherche_infirmier />}
        />
        <Route exact path="/logininfirmier" render={() => <Logininfirmier />} />
        <Route
          exact
          path="/inscriptioninfirmier"
          render={() => <Inscriptioninfirmier />}
        />
        <Route
          exact
          path="/inscriptiondoctor"
          render={() => <Inscriptiondoctor />}
        />
        <Route
          exact
          path="/consultation_infirmier/:matricule"
          render={(props) => <Consultation_infirmier matricule={props.match.params.matricule} />}
        />
        <Route
          exact
          path="/consultation_doctor/:matricule"
          render={(props) => <Consultation_doctor matricule={props.match.params.matricule}/>}
        />
        <Route exact path="/homepage_doctor" 
        render={()=> <DoctorHome/>} />
        <Route
          exact
          path="/homepage_infirmier"
          render={() => <InfirmierHome  />}
        />
        <Route
          exact
          path="/lists_doctors/:adresse/:categorie"
          render={props => (
            <Lists_doctors adresse={props.match.params.adresse} categorie={props.match.params.categorie}/>
          )}
        />
        <Route
          exact
          path="/lists_infirmiers/:adresse"
          render={props  => <Lists_infirmiers adresse={props.match.params.adresse} 
           />}
        />
        <Route
          exact
          path="/lists_pharmacies/:adresse"
          render={props => (
            <Lists_pharmacies adresse={props.match.params.adresse}
            />
          )}
        />
        <Route exact path="/validation" render={() => <Validation />} />
      </div>
    );
  }
}

export default Routeapp;
