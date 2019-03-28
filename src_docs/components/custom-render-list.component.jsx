import React from 'react';
import styled from 'styled-components';
import { FaTrashAlt } from 'react-icons/fa';
import { Primitive } from '@opuscapita/oc-cm-common-layouts';
import { FloatingSelectPortal } from '@opuscapita/react-floating-select';
import List from '../../src/index';
import { getNewColumnItem } from '../constants/data';
import getCountryOptions from '../constants/countries';

const Select = styled(FloatingSelectPortal)`
  width: 100%;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 0px;
  min-width: 0px;
`;

const ActionBarContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  min-height: 0px;
  min-width: 0px;
  justify-content: flex-end;
  padding-bottom: 10px;
`;

const TrashIcon = styled(FaTrashAlt)`
  cursor: pointer;
`;

export default class CustomRenderList extends React.PureComponent {
  state = {
    selectedItems: [],
    items: [],
    columns: [],
  }

  componentDidMount() {
    // Generate list items
    const items = [];
    for (let i = 1; i <= 5; i += 1) {
      const item = getNewColumnItem();
      items.push(item);
    }

    const countryOptions = getCountryOptions();

    // List columns with custom renderers
    const columns = [
      { valueKey: 'firstname', title: 'Firstname', width: 100 },
      { valueKey: 'lastname', title: 'Lastname', width: 100 },
      { valueKey: 'title', title: 'Title' },
      { valueKey: 'phone', title: 'Phone number', alignment: 'flex-end', width: 150 }, // eslint-disable-line
      { valueKey: 'company', title: 'Company' },
      {
        title: 'Country',
        valueKey: 'country',
        render: data => (
          <Select
            name="country"
            options={countryOptions}
            onChange={this.handleCountryChange(data.id)}
            value={data.country ? {
              label: data.country,
              value: data.country,
            } : null}
          />
        ),
        width: 200,
      },
      {
        render: data => <TrashIcon onClick={this.handleRemoveClick(data.id)} />,
        width: 40,
      },
    ];
    columns.push();
    // eslint-disable-next-line
    this.setState({
      items,
      columns,
    });
  }

  onSelectedChange = (selectedItems) => {
    this.setState({ selectedItems });
  }

  handleAddClick = () => {
    const { items } = this.state;
    // using concat to create new array instead of mutating existing one
    // otherwise list do not see it as a prop change and does not re-render
    this.setState({ items: [getNewColumnItem()].concat(items) });
  }

  handleRemoveClick = id => () => {
    this.setState({
      items: this.state.items.filter(i => i.id !== id),
    });
  }

  handleCountryChange = id => (option) => {
    const foundIndex = this.state.items.findIndex(i => i.id === id);
    if (foundIndex > -1) {
      const items = this.state.items.slice(0);
      items[foundIndex].country = option.value;
      this.setState({ items });
    }
  }

  renderActionBar = () => (
    <ActionBarContainer>
      <Primitive.Button
        onClick={this.handleAddClick}
      >
        Add new item
      </Primitive.Button>
    </ActionBarContainer>
  )

  render() {
    const {
      selectedItems,
      items,
      columns,
    } = this.state;
    return (
      <ListContainer>
        {this.renderActionBar()}
        <List
          selectedItems={selectedItems}
          onSelectedChange={this.onSelectedChange}
          {...this.props}
          items={items}
          columns={columns}
        />
      </ListContainer>
    );
  }
}
