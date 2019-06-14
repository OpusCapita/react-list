import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import ListModal from '../components/list-in-modal.component';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export default class ListInModalContainer extends React.PureComponent {
  state = {
    modalVisible: false,
  };

  toggleModal = (visible = false) => { this.setState({ modalVisible: visible }); }

  handleButtonClick = () => this.toggleModal(true);

  renderModal = () => this.state.modalVisible && ( // eslint-disable-line
    <ListModal {...this.props} toggleModal={this.toggleModal} />
  );

  render() {
    return (
      <Container>
        <span>
          Open/Close Modal with following button.
          You can determine needed dragItem z-index with:
          <code> dragItemZindex: 1060; </code>
          which defaults to 1060 that should be enough for most cases.
        </span>
        <br />
        <br />
        <Button id="toggleModal" onClick={this.handleButtonClick}>
          Toggle
        </Button>
        { this.renderModal() }
      </Container>
    );
  }
}
