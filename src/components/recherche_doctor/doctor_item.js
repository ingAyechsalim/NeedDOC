import React from "react";
import { Card, Icon, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./doctor_item.css";

const DoctorCard = props => {
  const { doctor = {} } = props;
  const {
    email = "",
    nom = "",
    adresse = "",
    phone = "",
    image = "https://st2.depositphotos.com/1036149/11646/i/950/depositphotos_116465290-stock-photo-fun-cartoon-doctor.jpg",
    categorie = "",
    description = "",
    matricule=0,
    rating = ""
  } = doctor;
  const extra = (
    <a>
      <Icon name="thumbs up" color="teal" />
      {rating}
    </a>
  );
  return (
    <div style={{ margin: "2%" }}>
      <div>
        <Card
          image={image}
          header={nom}
          meta={categorie}
          description={adresse}
          extra={extra}
        />
      </div>
      <div className="rdv">
        <Button className="ui teal basic button" role="button">
          <Link        to={`/consultation_doctor/${matricule}`}
>Prendre Rendez-Vous</Link>
        </Button>
      </div>
    </div>
  );
};

export default DoctorCard;
