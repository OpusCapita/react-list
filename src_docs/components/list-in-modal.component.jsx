import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import SimpleList from './simple-list.component';

export default class ListModal extends React.PureComponent {
  static propTypes = {
    toggleModal: PropTypes.func.isRequired,
  };

  closeModal = () => this.props.toggleModal(false); // eslint-disable-line

  render() {
    return (
      <Modal
        bsSize="large"
        dialogClassName="simpleModal"
        aria-labelledby="simpleModal"
        onHide={this.handleCancelClick}
        show
      >
        <Modal.Header>
          <Modal.Title>List in Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SimpleList {...this.props} />
        </Modal.Body>
        <Modal.Footer>
          <Button id="close" onClick={this.closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
