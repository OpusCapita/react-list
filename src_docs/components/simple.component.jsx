import React from 'react';
import faker from 'faker';
import List from '../../src/index';

export default class SimpleList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: [],
    };
    this.items = [];
    for (let i = 1; i <= 50; i += 1) {
      this.items.push({
        id: i,
        value: faker.name.findName(),
      });
    }
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
        items={this.items}
        selectedItems={selectedItems}
        onSelectedChange={this.onSelectedChange}
        {...this.props}
      />
    );
  }
}
