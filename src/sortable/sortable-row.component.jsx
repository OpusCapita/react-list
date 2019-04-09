import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SortableHandle, SortableElement } from 'react-sortable-hoc';
// OpusCapita imports
import { Icon } from '@opuscapita/react-icons';
import Checkbox from '@opuscapita/react-checkbox';
// Component imports
import Column from '../column.component';

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

const HandleIcon = styled(Icon)`
  margin-right: 0;
  margin-left: auto;
  display: flex;
  width: 4rem;
`;

const DragHandle = SortableHandle(() => <HandleIcon type="indicator" name="draggingArrows" />);

export default
@SortableElement
class SortableRow extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    item: PropTypes.shape({}).isRequired,
    itemHeight: PropTypes.number.isRequired,
    className: PropTypes.string.isRequired,
    useDragHandle: PropTypes.bool.isRequired,
    rowIndex: PropTypes.number.isRequired,
    columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    isSelected: PropTypes.bool.isRequired,
    isSelectable: PropTypes.bool.isRequired,
    isSortingDisabled: PropTypes.bool.isRequired,
    isItemBorderVisible: PropTypes.bool.isRequired,
    isIndexColumnVisible: PropTypes.bool.isRequired,
    onSelectChange: PropTypes.func.isRequired,
  };

  useDraggableHandle = () => (!this.props.isSortingDisabled && this.props.useDragHandle);

  // renders select Checkbox
  renderSelectedCell = () => {
    const {
      id,
      isSelected,
      onSelectChange,
    } = this.props;
    return (
      <Column id={`${id}-col-index`} width={35} alignment="flex-start">
        <Checkbox id={`${id}-selectitem`} checked={isSelected} onChange={onSelectChange} />
      </Column>
    );
  }

  renderIndexCell = () => {
    const {
      id, rowIndex,
    } = this.props;
    return (
      <Column id={`${id}-col-index`} width={35} alignment="flex-start">
        { rowIndex + 1 }
      </Column>
    );
  }

  renderItemCell = (column, idx) => {
    const {
      id, item, rowIndex,
    } = this.props;
    const key = column.valueKey || idx;
    let cell = null;
    if ( typeof column.render === 'function') {
      cell = column.render(item, rowIndex);
    } else if (column.valueKey) {
      cell = <DefaultCellContainer>{ item[column.valueKey] }</DefaultCellContainer>;
    }
    return (
      <Column
        id={`${id}-col-${key}`}
        key={key}
        width={column.width || 200}
        alignment={column.alignment || 'flex-start'}
      >
        { cell }
      </Column>
    );
  }

  renderHandle = () => <DragHandle {...this.props} />;

  render() {
    const {
      isSelectable, isIndexColumnVisible, isItemBorderVisible, className, columns, itemHeight,
    } = this.props;
    const useDraggableHandle = this.useDraggableHandle();
    return (
      <Row
        height={itemHeight}
        className={className}
        isItemBorderVisible={isItemBorderVisible}
      >
        { isSelectable && this.renderSelectedCell() }
        { isIndexColumnVisible && this.renderIndexCell() }
        { columns.map(this.renderItemCell) }
        { useDraggableHandle && this.renderHandle() }
      </Row>
    );
  }
}
