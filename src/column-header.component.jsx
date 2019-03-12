import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Column from './column.component';
import theme from './theme';

const Header = styled.header`
  display: flex;
  height: ${props => props.height}px;
  font-weight: 600;
  border-top: 1px solid ${theme.colors.grey7};
  border-left: 1px solid ${theme.colors.grey7};
  border-right: 1px solid ${theme.colors.grey7};
  background: ${theme.colors.grey4};
`;

const HeaderColumn = styled(Column)`
  border-right: 1px solid ${theme.colors.grey7};
`;

export default class ColumnHeader extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    showIndex: PropTypes.bool.isRequired,
    columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    height: PropTypes.number.isRequired,
  }

  static renderColumn = column => (
    <HeaderColumn
      key={column.valueKey}
      width={column.width || 200}
      alignment={column.alignment || 'flex-start'}
    >
      <span>{column.title}</span>
    </HeaderColumn>
  )

  render() {
    const {
      id,
      showIndex,
      columns,
      height,
    } = this.props;
    return (
      <Header
        id={id}
        height={height}
      >
        {showIndex && <HeaderColumn width={30}>#</HeaderColumn>}
        {columns && columns.map(ColumnHeader.renderColumn)}
      </Header>
    );
  }
}
