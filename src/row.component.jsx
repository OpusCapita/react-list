import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Checkbox from '@opuscapita/react-checkbox';
import Column from './column.component';

const Row = styled.div`
  display: flex;
  height: ${props => props.height}px;
  border-bottom: ${props => (props.isItemBorderVisible ? `1px solid ${props.theme.colors.grey6}` : 'none')};
  /* cursor: pointer; */
  align-items: center;
  background: ${props => (props.selected ? props.theme.colors.grey5 : props.theme.colors.white)};
  &:hover {
    background: ${props => props.theme.colors.grey4};
  }
  user-select: none;
`;

const DefaultTextContainer = styled.span`
  text-overflow: ellipsis;
  white-space: ${props => (!props.insideTooltip ? 'nowrap' : 'normal')};
  overflow: hidden;
`;

export default class List extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    item: PropTypes.shape({}).isRequired,
    itemHeight: PropTypes.number.isRequired,
    rowIndex: PropTypes.number.isRequired,
    isIndexColumnVisible: PropTypes.bool.isRequired,
    isItemBorderVisible: PropTypes.bool.isRequired,
    columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    isSelected: PropTypes.bool.isRequired,
    isSelectable: PropTypes.bool.isRequired,
    onSelectChange: PropTypes.func.isRequired,
  }

  renderSelectColumn = () => {
    const {
      id,
      isSelected,
      onSelectChange,
    } = this.props;
    return (
      <Column
        id={`${id}-col-index`}
        width={35}
        alignment="flex-start"
      >
        <Checkbox
          id={`${id}-selectitem`}
          checked={isSelected}
          onChange={onSelectChange}
        />
      </Column>
    );
  }

  renderIndexColumn = () => {
    const {
      id,
      rowIndex,
    } = this.props;
    return (
      <Column
        id={`${id}-col-index`}
        width={35}
        alignment="flex-start"
      >
        {rowIndex + 1}
      </Column>
    );
  }

  renderItemColumn = (column) => {
    const {
      id,
      item,
    } = this.props;
    return (
      <Column
        id={`${id}-col-${column.valueKey}`}
        key={column.valueKey}
        width={column.width || 200}
        alignment={column.alignment || 'flex-start'}
      >
        <DefaultTextContainer>
          {item[column.valueKey]}
        </DefaultTextContainer>
      </Column>
    );
  }

  render() {
    const {
      isSelectable,
      isIndexColumnVisible,
      isItemBorderVisible,
      columns,
      itemHeight,
    } = this.props;
    return (
      <Row height={itemHeight} isItemBorderVisible={isItemBorderVisible}>
        {isSelectable && this.renderSelectColumn()}
        {isIndexColumnVisible && this.renderIndexColumn()}
        {columns.map(this.renderItemColumn)}
      </Row>
    );
  }
}
