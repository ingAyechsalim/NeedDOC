import React from "react";
import { Card, Popup, Icon, Button, Image } from "semantic-ui-react";
import "./rdvItem.css";

const RndvCard = props => {
  const { rndv = {} } = props;
  const { nom = "", phone = "", email = "", date = "", time = "" } = rndv;
  return (
    <div>
      <div className="rdv-item">
        <div>
          <div>
            <Icon className="calendar alternate" />
            {date}
          </div>
          <div>
            <Icon className="time" /> {time}
          </div>
        </div>
        <div>
          <Popup
            trigger={
              <Button
                className="ui teal basic button"
                icon="file alternate"
                content="Fiche patient"
              />
            }
            content={
              <Card>
                <Card.Content>
                  <Card.Header>
                    <Icon className="user" />
                    {nom}
                  </Card.Header>
                  <Card.Meta>
                    <Icon className="mail" /> <strong>{email}</strong>
                  </Card.Meta>
                  <Card.Description>
                    <Icon className="phone" />
                    {phone}
                  </Card.Description>
                  <Card.Description>
                    <Icon className="calendar alternate" />
                    {date}
                  </Card.Description>
                  <Card.Description>
                    <strong>
                      <Icon className="time" />
                      {time}
                    </strong>
                  </Card.Description>
                </Card.Content>
              </Card>
            }
            on="click"
            position="top right"
          />
        </div>
        <div>
          <Popup
            trigger={
              <Icon name="times circle outline" color="red" size="big" />
            }
            content={
              <div style={{ color: "teal" }}>
                Voulez-vous annuler ce rendez-vous?
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};
export default RndvCard;
/*<Card>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
          />
          <Card.Header>{nom}</Card.Header>
          <Card.Meta>Friends of Elliot</Card.Meta>
          <Card.Description>
            {nom} veux un rendez-vous le: <strong>{date}</strong>
          </Card.Description>
          <Card.Description>
            {nom} veux un rendez-vous à : <strong>{time}</strong>
          </Card.Description>
          <Card.Description>
            <strong>
              {email}/{phone}
            </strong>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button positive>accepter</Button>
            <Button negative>decliner</Button>
          </div>
        </Card.Content>
      </Card>*/
