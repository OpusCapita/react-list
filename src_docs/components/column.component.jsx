import React from 'react';
import List from '../../src/index';

export default class ColumnList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: [],
    };
    this.items = [
      { id: 1, name: 'Name1', address: 'Address1' },
      { id: 2, name: 'Name2', address: 'Address2' },
      { id: 3, name: 'Name3', address: 'Address3' },
      { id: 4, name: 'Name4', address: 'Address4' },
      { id: 5, name: 'Name5', address: 'Address5' },
      { id: 6, name: 'Name6', address: 'Address6' },
      { id: 7, name: 'Name7', address: 'Address7' },
      { id: 8, name: 'Name8', address: 'Address8' },
      { id: 9, name: 'Name9', address: 'Address9' },
      { id: 10, name: 'Name10', address: 'Address10' },
      { id: 11, name: 'Name11', address: 'Address11' },
      { id: 12, name: 'Name12', address: 'Address12' },
      { id: 13, name: 'Name13', address: 'Address13' },
      { id: 14, name: 'Name14', address: 'Address14' },
      { id: 15, name: 'Name15', address: 'Address15' },
    ];
    this.columns = [
      { valueKey: 'name', title: 'Name' },
      { valueKey: 'address', title: 'Address' },
    ];
  }

  onSelectedChange = (selectedItems) => {
    this.setState({ selectedItems });
  }

  render() {
    const {
      selectedItems,
    } = this.state;
    return (
      <List
        columns={this.columns}
        items={this.items}
        selectedItems={selectedItems}
        onSelectedChange={this.onSelectedChange}
        {...this.props}
      />
    );
  }
}
