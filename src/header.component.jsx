import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Checkbox from '@opuscapita/react-checkbox';
import Searchbar from '@opuscapita/react-searchbar';

const HeaderContainer = styled.div`
  display: flex;
  height: 40px;
`;

const CheckboxContainer = styled.div`
  flex: 0 0 auto;
  min-height: 40px;
  width: auto;
  padding-top: 5px;
`;

const SearchContainer = styled.div`
  flex: 1 1 auto;
  min-height: 0px;
  min-width: 0px;
  overflow: hidden;
`;

const StyledCheckbox = styled(Checkbox)`
  && .icon {
    width: auto;
    user-select: none;
  }
`;

export default class Header extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    isSearchable: PropTypes.bool.isRequired,
    isSelectAllVisible: PropTypes.bool.isRequired,
    isShowOnlySelectedVisible: PropTypes.bool.isRequired,
    isColumnHeaderVisible: PropTypes.bool.isRequired,
    isAllSelected: PropTypes.bool.isRequired,
    searchKeyword: PropTypes.string.isRequired,
    isShowOnlySelected: PropTypes.bool.isRequired,
    onSelectAllChange: PropTypes.func.isRequired,
    onSearchChange: PropTypes.func.isRequired,
    onShowOnlySelectedChange: PropTypes.func.isRequired,
    translations: PropTypes.shape({
      search: PropTypes.string,
      selectAll: PropTypes.string,
      showOnlySelected: PropTypes.string,
    }).isRequired,
  }

  renderSelectAll = () => {
    const {
      id,
      isAllSelected,
      onSelectAllChange,
      translations,
    } = this.props;
    return (
      <CheckboxContainer style={{ paddingRight: '10px' }}>
        <StyledCheckbox
          id={`${id}-selectall`}
          checked={isAllSelected}
          onChange={onSelectAllChange}
          label={translations.selectAll}
        />
      </CheckboxContainer>
    );
  }

  renderSearch = () => {
    const {
      id,
      searchKeyword,
      onSearchChange,
      translations,
    } = this.props;
    return (
      <Searchbar
        id={`${id}-selectall`}
        value={searchKeyword}
        onSearch={onSearchChange}
        dynamicSearchStartsFrom={1}
        searchPlaceHolder={`${translations.search}...`}
        tooltipDelay={500000}
      />
    );
  }

  renderShowOnlySelected = () => {
    const {
      id,
      isShowOnlySelected,
      onShowOnlySelectedChange,
      translations,
    } = this.props;
    return (
      <CheckboxContainer style={{ paddingLeft: '10px' }}>
        <StyledCheckbox
          id={`${id}-showonlyselected`}
          checked={isShowOnlySelected}
          onChange={onShowOnlySelectedChange}
          label={translations.showOnlySelected}
        />
      </CheckboxContainer>
    );
  }

  render() {
    const {
      id,
      isSearchable,
      isSelectAllVisible,
      isShowOnlySelectedVisible,
      isColumnHeaderVisible,
    } = this.props;
    return (
      <HeaderContainer
        id={id}
      >
        {!isColumnHeaderVisible && isSelectAllVisible && this.renderSelectAll()}
        <SearchContainer>
          {isSearchable && this.renderSearch()}
        </SearchContainer>
        {isShowOnlySelectedVisible && this.renderShowOnlySelected()}
      </HeaderContainer>
    );
  }
}
