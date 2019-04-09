import React from 'react';
import SortableList from '../../src/sortable/index';

export default class SimpleSortableList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
      selectedItems: [],
    };
  }

  onChange = (newItems) => {
    this.setState({ items: newItems });
  }

  render() {
    const { items, ...others } = this.props;
    const {
      selectedItems,
    } = this.state;
    return (
      <SortableList
        {...others}
        items={this.state.items}
        onChange={this.onChange}
        selectedItems={selectedItems}
      />
    );
  }
}