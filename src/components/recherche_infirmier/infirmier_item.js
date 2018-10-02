import React from "react";
import { Card, Icon, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const InfirmierCard = props => {
  const { infirimier = {} } = props;
  const {
    nom = "",
    description = "",
    year = "",
    rating = 0,
    image = "",
    adresse = "",
    phone = 0,
    email = "",
    categorie = "",
    matricule=0,
  } = infirimier;
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
          <Link         to={`/consultation_infirmier/${matricule}`}
 >Demander une consultation</Link>
        </Button>
      </div>
    </div>
  );
};

export default InfirmierCard;
