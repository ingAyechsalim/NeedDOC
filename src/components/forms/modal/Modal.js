import React, { Component } from "react";
import { Button, Icon, Modal } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class ModalContact extends Component {
  state = { modalOpen: false };

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  render() {
    return (
      <Modal
        trigger={
          <Button color="teal" onClick={this.handleOpen}>
            Envoyer
          </Button>
        }
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size="large"
      >
        <Modal.Content>
          <h3>Votre message a été bien envoyé! Merci</h3>
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
