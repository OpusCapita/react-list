import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Checkbox from '@opuscapita/react-checkbox';
import Column from './column.component';


const Header = styled.header`
  display: flex;
  height: ${props => props.height}px;
  font-weight: 600;
  border-top: 1px solid ${props => props.theme.colors.grey7};
  border-left: 1px solid ${props => props.theme.colors.grey7};
  border-right: 1px solid ${props => props.theme.colors.grey7};
  background: ${props => props.theme.colors.grey4};
`;

const HeaderColumn = styled(Column)`
  border-right: ${props => (props.isLastColumn ? 'none' : `1px solid ${props.theme.colors.grey7}`)};
`;

export default class ColumnHeader extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    isSelectColumnVisible: PropTypes.bool.isRequired,
    isSelectAllVisible: PropTypes.bool.isRequired,
    isIndexColumnVisible: PropTypes.bool.isRequired,
    columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    height: PropTypes.number.isRequired,
    isAllSelected: PropTypes.bool.isRequired,
    onSelectAllChange: PropTypes.func.isRequired,
  }

  renderSelectAllColumn = () => {
    const {
      id,
      isAllSelected,
      isSelectAllVisible,
      onSelectAllChange,
    } = this.props;
    return (
      <HeaderColumn width={35}>
        {isSelectAllVisible && (
          <Checkbox
            id={`${id}-selectall`}
            checked={isAllSelected}
            onChange={onSelectAllChange}
          />
        )}
      </HeaderColumn>
    );
  }

  renderColumn = (column, idx) => {
    const { columns } = this.props;

    return (
      <HeaderColumn
        key={column.valueKey || idx}
        width={column.width || 200}
        alignment={column.alignment || 'flex-start'}
        isLastColumn={columns.length - 1 === idx}
      >
        <span>{column.title || ''}</span>
      </HeaderColumn>
    );
  }

  render() {
    const {
      id,
      isIndexColumnVisible,
      isSelectColumnVisible,
      columns,
      height,
    } = this.props;
    return (
      <Header
        id={id}
        height={height}
      >
        {isSelectColumnVisible && this.renderSelectAllColumn()}
        {isIndexColumnVisible && <HeaderColumn width={35}>#</HeaderColumn>}
        {columns && columns.map(this.renderColumn)}
      </Header>
    );
  }
}
