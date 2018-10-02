import React, { Component } from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class ModalConsultation extends Component {
  state = { modalOpen: false };

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  render() {
    return (
      <Modal
        trigger={
          <Button color="teal" fluid size="large" onClick={this.handleOpen}>
            Confirmer
          </Button>
        }
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size="small"
      >
        <Modal.Content>
          <h3>Prise de rendez-vous est effectuée avec succès </h3>
        </Modal.Content>
        <Modal.Actions>
          <Link to="/">
            <Button color="green" onClick={this.handleClose} inverted>
              <Icon name="checkmark" />
            </Button>
          </Link>
        </Modal.Actions>
      </Modal>
    );
  }
}
