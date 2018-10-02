import React from "react";
import { Card, Icon, Button } from "semantic-ui-react";

const CardPharmacie = props => {
  const { pharmacie = {} } = props;
  const {
    nom = "",
    description = "",
    year = "",
    horaire = "",
    adresse = "",
    phone = 0,
    email = ""
  } = pharmacie;
  const extra = (
    <a>
      <Icon name="clock outline" />
      {horaire}
    </a>
  );
  return (
    <div style={{ margin: "2%" }}>
      <div>
        <Card
          image={require("./map.PNG")}
          header={nom}
          meta={description}
          description={adresse}
          extra={extra}
        />
      </div>
    </div>
  );
};

export default CardPharmacie;
