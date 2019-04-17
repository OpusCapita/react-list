import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Checkbox from '@opuscapita/react-checkbox';
import List from '../../src/index';

const ItemTextContainer = styled.span`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const ItemContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  min-width: 0;
  min-height: 100%;
  flex-direction: row;
  align-items: center;
  padding-left: ${props => (props.isGroup ? 0 : '20px')};
`;

export default class GroupList extends React.PureComponent {
  static propTypes = {
    items: PropTypes.array.isRequired, // eslint-disable-line
  }

  state = {
    isAllSelected: false,
    selectedItems: [], // contains all normal items that are selected
    columns: [],
  }

  componentDidMount() {
    const columns = [
      {
        render: (item, index) => (
          <ItemContainer isGroup={item.isGroup}>
            <Checkbox
              id={`${index}-selectitem`}
              checked={this.isItemSelected(item)}
              onChange={this.handleItemSelectClick(item)}
            />
            <ItemTextContainer>
              {item.value}
            </ItemTextContainer>
          </ItemContainer>
        ),
        width: 'auto',
      },

    ];
    this.setState({ columns });
  }

  // Can be group or normal item
  isItemSelected = (item) => {
    const { items } = this.props;
    const { selectedItems } = this.state;
    const selectedIdMap = selectedItems.map(i => i.id);
    if (item.isGroup) {
      // in case of group level item, check if all items in group are selected
      const groupItems = items.filter(i => i.groupId === item.id);
      const selectedGroupItems = groupItems.filter(i => selectedIdMap.includes(i.id));
      if (groupItems.length === selectedGroupItems.length) {
        return true;
      }
      return false;
    }
    // otherwise check if normal item is in selectedItems list
    return selectedIdMap.includes(item.id);
  }

  // can be group or normal item
  handleItemSelectClick = item => () => {
    const { items } = this.props;
    const isSelected = this.isItemSelected(item);
    let { selectedItems } = this.state;
    if (item.isGroup) {
      // group item
      // first de-select all
      selectedItems = selectedItems.filter(i => i.groupId !== item.id);
      if (!isSelected) {
        // if not all was selected, select all group items
        selectedItems = selectedItems.concat(items.filter(i => i.groupId === item.id));
      }
    } else if (isSelected) {
      // normal item
      selectedItems = selectedItems.filter(i => i.id !== item.id);
    } else {
      // normal item
      selectedItems = selectedItems.concat([item]);
    }
    this.setState({ selectedItems });
  }

  handleSelectAllClick = () => {
    const { items } = this.props;
    const { isAllSelected } = this.state;
    if (isAllSelected) {
      // Deselect all
      this.setState({
        isAllSelected: false,
        selectedItems: [],
      });
    } else {
      // Select all
      this.setState({
        isAllSelected: true,
        selectedItems: items.filter(i => !i.isGroup),
      });
    }
  }

  render() {
    const {
      isAllSelected,
      selectedItems,
      columns,
    } = this.state;
    return (
      <List
        selectedItems={selectedItems.map(i => i.id)}
        {...this.props}
        columns={columns}
        isAllSelected={isAllSelected}
        onSelectAllClick={this.handleSelectAllClick}
      />
    );
  }
}
