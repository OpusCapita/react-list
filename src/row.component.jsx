import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Column from './column.component';
import theme from './theme';

const Row = styled.div`
  display: flex;
  height: ${props => (props.height - 1)}px;
  cursor: pointer;
  align-items: center;
  background: ${props => (props.selected ? theme.colors.grey5 : theme.colors.white)};
  &:hover {
    background: ${theme.colors.grey4};
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
    showIndex: PropTypes.bool.isRequired,
    columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
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
      id,
      showIndex,
      columns,
      rowIndex,
      itemHeight,
    } = this.props;
    return (
      <Row
        height={itemHeight}
      >
        {showIndex && (
          <Column
            id={`${id}-col-index`}
            width={30}
            alignment="flex-start"
          >
            {rowIndex + 1}
          </Column>
        )}
        {!!columns && columns.map(this.renderItemColumn)}
      </Row>
    );
  }
}
