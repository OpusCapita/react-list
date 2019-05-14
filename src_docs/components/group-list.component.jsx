import React from 'react';
import styled from 'styled-components';
import arrayMove from 'array-move';
import Checkbox from '@opuscapita/react-checkbox';
import List from '../../src/index';
import { getGroupData } from '../constants/data';

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
  state = {
    isAllSelected: false,
    selectedItems: [], // contains all normal items that are selected
    columns: [],
    items: [],
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
    const items = getGroupData();
    this.setState({
      items,
      columns,
    });
  }

  // Can be group or normal item
  isItemSelected = (item) => {
    const { items, selectedItems } = this.state;
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
    const { items } = this.state;
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
    const { items, isAllSelected } = this.state;
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

  handleSortEnd = ({ oldIndex, newIndex }) => {
    const { items } = this.state;
    this.setState({
      items: arrayMove(items, oldIndex, newIndex),
    });
  };

  render() {
    const {
      isAllSelected,
      selectedItems,
      items,
      columns,
    } = this.state;
    return (
      <List
        items={items}
        columns={columns}
        selectedItems={selectedItems.map(i => i.id)}
        onSortEnd={this.handleSortEnd}
        {...this.props}
        isAllSelected={isAllSelected}
        onSelectAllClick={this.handleSelectAllClick}
      />
    );
  }
}
