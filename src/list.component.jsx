import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ResponsiveListContainer from './responsive-list-container.component';
import ColumnHeader from './column-header.component';
import Row from './row.component';

const ListContainer = styled.div`
  height: ${props => (props.height === 'auto' ? '100%' : `${props.height}px`)};
  width: ${props => (props.width === 'auto' ? '100%' : `${props.width}px`)};
`;

export default class List extends React.PureComponent {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    id: PropTypes.string,
    className: PropTypes.string,
    height: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.oneOf(['auto']),
    ]),
    width: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.oneOf(['auto']),
    ]),
    itemHeight: PropTypes.number,
    idKey: PropTypes.string,
    showIndex: PropTypes.bool,
    showColumnHeader: PropTypes.bool,
    columns: PropTypes.arrayOf(PropTypes.shape({})),
    columnHeaderHeight: PropTypes.number,
  }

  static defaultProps = {
    id: 'oc-react-list',
    className: '',
    height: 'auto',
    width: 'auto',
    itemHeight: 40,
    idKey: 'id',
    columns: [{ valueKey: 'value', title: 'Value' }],
    showIndex: false,
    showColumnHeader: false,
    columnHeaderHeight: 40,
  }

  renderRow = (item, rowIndex) => {
    const {
      id,
      idKey,
      itemHeight,
      showIndex,
      columns,
    } = this.props;
    return (
      <Row
        id={`${id}-row-${rowIndex}`}
        key={item[idKey]}
        item={item}
        rowIndex={rowIndex}
        showIndex={showIndex}
        itemHeight={itemHeight}
        columns={columns}
      />
    );
  }

  render() {
    const {
      id,
      columns,
      showIndex,
      height,
      width,
      columnHeaderHeight,
      showColumnHeader,
    } = this.props;
    return (
      <ListContainer height={height} width={width}>
        {showColumnHeader && (
          <ColumnHeader
            id={`${id}-column-header`}
            columns={columns}
            showIndex={showIndex}
            height={columnHeaderHeight}
          />
        )}
        <ResponsiveListContainer {...this.props}>
          {this.props.items.map(this.renderRow)}
        </ResponsiveListContainer>
      </ListContainer>
    );
  }
}
