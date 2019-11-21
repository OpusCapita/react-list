import React from 'react';
import PropTypes from 'prop-types';
import { arrayMove } from './demo-utils';
import List from '../../src/index';
import { getSimpleData, getColumnData } from '../constants/data';

export default class SimpleList extends React.PureComponent {
  static propTypes = {
    useColumnData: PropTypes.bool,
  }

  static defaultProps = {
    useColumnData: false,
  }

  state = {
    selectedItems: [],
    items: [],
  }

  componentDidMount() {
    const { useColumnData } = this.props;
    const { items, columns } = useColumnData ? getColumnData(100) : getSimpleData(100);
    this.setState({
      items,
      columns,
    });
  }

  onSelectedChange = (selectedItems) => {
    this.setState({ selectedItems });
  }

  handleSortEnd = ({ oldIndex, newIndex }) => {
    const { items } = this.state;
    this.setState({
      items: arrayMove(items, oldIndex, newIndex),
    });
  };

  render() {
    const {
      selectedItems,
      items,
      columns,
    } = this.state;
    return (
      <List
        items={items}
        columns={columns}
        selectedItems={selectedItems}
        onSelectedChange={this.onSelectedChange}
        onSortEnd={this.handleSortEnd}
        {...this.props}
      />
    );
  }
}
