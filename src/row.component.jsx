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

const DefaultCellContainer = styled.span`
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
    isSelectColumnVisible: PropTypes.bool.isRequired,
    onSelectChange: PropTypes.func.isRequired,
    onRowClick: PropTypes.func.isRequired,
    onRowDoubleClick: PropTypes.func.isRequired,
    onRowRightClick: PropTypes.func.isRequired,
  }

  handleRowClick = () => {
    const {
      item,
      rowIndex,
      onRowClick,
    } = this.props;
    onRowClick(item, rowIndex);
  }

  handleRowDoubleClick = () => {
    const {
      item,
      rowIndex,
      onRowDoubleClick,
    } = this.props;
    onRowDoubleClick(item, rowIndex);
  }

  handleRowRightClick = (e) => {
    const {
      item,
      rowIndex,
      onRowRightClick,
    } = this.props;
    onRowRightClick(item, rowIndex);
    e.preventDefault();
  }

  renderSelectCell = () => {
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

  renderIndexCell = () => {
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

  renderItemCell = (column, idx) => {
    const {
      id,
      item,
      rowIndex,
    } = this.props;
    const key = column.valueKey || idx;
    let cell = null;
    if (typeof column.render === 'function') {
      cell = column.render(item, rowIndex);
    } else if (column.valueKey) {
      cell = <DefaultCellContainer>{item[column.valueKey]}</DefaultCellContainer>;
    }
    return (
      <Column
        id={`${id}-col-${key}`}
        key={key}
        width={column.width || 200}
        alignment={column.alignment || 'flex-start'}
      >
        {cell}
      </Column>
    );
  }

  render() {
    const {
      isSelectColumnVisible,
      isIndexColumnVisible,
      isItemBorderVisible,
      columns,
      itemHeight,
    } = this.props;
    return (
      <Row
        height={itemHeight}
        isItemBorderVisible={isItemBorderVisible}
        onClick={this.handleOnClick}
        onDoubleClick={this.handleOnDoubleClick}
        onRightClick={this.handleOnRightClick}
      >
        {isSelectColumnVisible && this.renderSelectCell()}
        {isIndexColumnVisible && this.renderIndexCell()}
        {columns.map(this.renderItemCell)}
      </Row>
    );
  }
}
