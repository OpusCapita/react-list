import React from 'react';
import List from '../../src/index';

export default class SimpleList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: [],
    };
    this.items = [
      { id: 1, value: 'Name1' },
      { id: 2, value: 'Name2' },
      { id: 3, value: 'Name3' },
      { id: 4, value: 'Name4' },
      { id: 5, value: 'Name5' },
      { id: 6, value: 'Name6' },
      { id: 7, value: 'Name7' },
      { id: 8, value: 'Name8' },
      { id: 9, value: 'Name9' },
      { id: 10, value: 'Name10' },
      { id: 11, value: 'Name11' },
      { id: 12, value: 'Name12' },
      { id: 13, value: 'Name13' },
      { id: 14, value: 'Name14' },
      { id: 15, value: 'Name15' },
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
        items={this.items}
        selectedItems={selectedItems}
        onSelectedChange={this.onSelectedChange}
        {...this.props}
      />
    );
  }
}
