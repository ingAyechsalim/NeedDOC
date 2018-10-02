import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import { Segment, Button, Divider, Image, Header } from "semantic-ui-react";
import Hoc from "./forms/hoc/Hoc";
import Caoussels from "../components/forms/carroussel/mycarroussel";
import Article from "./Article";

class App extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#fbfdfb" }}>
        <div>
          <Navbar />
        </div>
        <div className="caroussel-img">
          <Caoussels />
        </div>
        <div className="doc-inf">
          <h1>vous êtes un médecin ou un infirmier?</h1>
          <div className="join-us">
            <div>Rejoignez-nous </div>
            <div> Gagnez du temps sur la gestion de vos rendez-vous </div>
            <div> Facilitez la vie de vos patients </div>
          </div>
        </div>
        <div className="login-doc-inf">
          <div className="login">
            <div>
              <img className="doc-img" src={require("./doc.png")} />
            </div>
            <h2>Vous êtes un médecin?</h2>
            <Segment  padded>
              <Button className="ui teal basic button" role="button">
                <i class="cog icon" />

                <Link to="/logindoctor">connexion</Link>
              </Button>
              <Divider horizontal style={{ color: "teal" }}>
                Ou
              </Divider>

              <Button className="ui teal basic button" role="button">
                <i class="doctor icon" />
                <Link to="/inscriptiondoctor">inscription</Link>
              </Button>
            </Segment>
          </div>
          <div className="login">
            <div>
              <img className="inf-img" src={require("./inf.png")} />
            </div>
            <h2>Vous êtes un infirmier?</h2>
            <div>
              <Segment  padded>
                <Button className="ui teal basic button" role="button">
                  <i color="teal" class="cog icon" />

                  <Link to="/logininfirmier">connexion</Link>
                </Button>

                <Divider horizontal style={{ color: "teal" }}>
                  ou
                </Divider>

                <Button className="ui teal basic button" role="button">
                  <i class="doctor icon" />
                  <Link to="/inscriptioninfirmier">inscription</Link>
                </Button>
              </Segment>
            </div>
          </div>
        </div>

        <div>
          <div
            style={{
              border: "2px solid teal",
              borderRadius:'7px',
              margin: "4%",
              padding: "2%"
            }}
          >
            <h1 className="title">
              Des articles qui pourraient vous intéresser
            </h1>
            <div className="articles">
              <Article className="article"
                title="Comment manger sainement ?"
                image={require("./art1.jpg")}
                description="« Que ton aliment soit ton premier médicament » disait déjà Hippocrate. 
              Manger sainement, équilibré, moins salé, moins sucré, moins gras, plus frais, avec plus de vitamines, sans payer trop cher, sans passer sa vie aux fourneaux..."
              />
              <Article className="article"
                title="Les bons conseils de pratique d'une activité physique"
                image={require("./art2.jpeg")}
                description="La pratique d’une activité physique ou d’un sport apporte des bienfaits pour la santé. De très nombreuses études ou rapports l’ont démontré ces dernières années.

              Une bonne pratique d’au moins 45 minutes par jour permet de diminuer l’apparition de nombreuses maladies..."
              />
              <Article className="article"
                title="À quelle fréquence faut-il aller voir son médecin ?"
                image={require("./art3.jpg")}
                description="Les personnes qui n’ont jamais eu de graves soucis de santé se demandent souvent s’il est important de se rendre régulièrement chez son médecin. La réponse est oui. Mais à quelle fréquence doit-on se rendre chez son généraliste ?..."
              />
            </div>
          </div>

          <div />
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}
export default Hoc(App);
