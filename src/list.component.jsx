import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, withTheme } from 'styled-components';
import memoize from 'memoize-one';
import ResponsiveListContainer from './responsive-list-container.component';
import Header from './header.component';
import ColumnHeader from './column-header.component';
import Row from './row.component';
import { themeDefaults, themeShape } from './theme';

const ListContainer = styled.div`
  height: ${props => (props.height === 'auto' ? '100%' : `${props.height}px`)};
  width: ${props => (props.width === 'auto' ? '100%' : `${props.width}px`)};
`;

const NoResultsText = styled.p`
  text-align: center;
  margin-top: 1rem;
`;

export default
@withTheme
class List extends React.PureComponent {
  static propTypes = {
    // Special prop from styled-components ThemeProvider (if in use)
    theme: themeShape,

    // Data props
    id: PropTypes.string,
    className: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    selectedItems: PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ])),
    columns: PropTypes.arrayOf(PropTypes.shape({})),
    height: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.oneOf(['auto']),
    ]),
    width: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.oneOf(['auto']),
    ]),
    itemHeight: PropTypes.number,
    columnHeaderHeight: PropTypes.number,
    idKey: PropTypes.string, // key of id in list data
    translations: PropTypes.shape({
      search: PropTypes.string,
      selectAll: PropTypes.string,
      showOnlySelected: PropTypes.string,
      noResults: PropTypes.string,
    }),
    customTheme: themeShape, // theme override
    reactInfiniteProps: PropTypes.shape({}),

    // Booleans
    isSearchable: PropTypes.bool,
    isSelectColumnVisible: PropTypes.bool,
    isSelectAllVisible: PropTypes.bool,
    isShowOnlySelectedVisible: PropTypes.bool,
    isColumnHeaderVisible: PropTypes.bool,
    isIndexColumnVisible: PropTypes.bool,
    isItemBorderVisible: PropTypes.bool,
    isAllSelected: PropTypes.bool,
    isSortable: PropTypes.bool,

    // actions
    onSelectedChange: PropTypes.func,
    onRowClick: PropTypes.func,
    onRowDoubleClick: PropTypes.func,
    onRowContextMenu: PropTypes.func,
    onSelectAllClick: PropTypes.func,
    onSortEnd: PropTypes.func,
  }

  static defaultProps = {
    theme: null,
    id: 'oc-react-list',
    className: '',
    selectedItems: [],
    columns: [{ valueKey: 'value', title: 'Value' }],
    height: 'auto',
    width: 'auto',
    itemHeight: 40,
    columnHeaderHeight: 40,
    idKey: 'id',
    translations: {
      search: 'Search',
      selectAll: 'All',
      showOnlySelected: 'Show only selected',
      noResults: 'There are no items to show in this list.',
    },
    customTheme: null,
    reactInfiniteProps: {},
    isSearchable: false,
    isSelectColumnVisible: false,
    isSelectAllVisible: false,
    isShowOnlySelectedVisible: false,
    isColumnHeaderVisible: false,
    isIndexColumnVisible: false,
    isItemBorderVisible: true,
    isAllSelected: null,
    isSortable: false,
    onSelectedChange: () => {},
    onRowClick: () => {},
    onRowDoubleClick: () => {},
    onRowContextMenu: () => {},
    onSelectAllClick: () => {},
    onSortEnd: () => {
      console.warn('@opuscapita/react-list: You must implement onSortEnd function to make sorting work! example: https://github.com/clauderic/react-sortable-hoc#basic-example'); // eslint-disable-line
    },
  }

  constructor(props) {
    super(props);
    this.state = {
      searchKeyword: '',
      showOnlySelected: false,
    };
  }

  handleSelectAllChange = () => {
    const {
      items,
      selectedItems,
      idKey,
      onSelectedChange,
      onSelectAllClick,
    } = this.props;
    if (items.length > selectedItems.length) {
      // Select all
      onSelectedChange(items.map(i => i[idKey]));
    } else {
      // Deselect all
      onSelectedChange([]);
    }
    onSelectAllClick();
  }

  handleItemSelectChange = (itemId, isSelected) => () => {
    const {
      selectedItems,
      onSelectedChange,
    } = this.props;
    if (isSelected) {
      onSelectedChange(selectedItems.filter(id => id !== itemId));
    } else {
      onSelectedChange(selectedItems.concat([itemId]));
    }
  }

  handleSearchChange = (searchKeyword) => {
    this.setState({ searchKeyword });
  };

  handleShowOnlySelectedChange = () => {
    const { showOnlySelected } = this.state;
    this.setState({ showOnlySelected: !showOnlySelected });
  };

  filter = () => {
    const {
      idKey,
      columns,
    } = this.props;
    // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#what-about-memoization
    return memoize((items, selectedItems, searchKeyword, showOnlySelected) => items.filter((i) => {
      let hit = false;
      if (i.isAlwaysVisible) {
        return true;
      }
      if (showOnlySelected && !selectedItems.includes(i[idKey])) {
        return false;
      }
      if (searchKeyword === '') {
        return true;
      }
      const stringMatcher = (data, keyword) => {
        let escapedKeyword = keyword;
        const specialChars = '[]\\^$.|?*+()';

        // If keyword val starts with a Regex special character, we must escape it
        if (specialChars.includes(keyword[0])) escapedKeyword = `\\${keyword}`;
        return (new RegExp(escapedKeyword, 'i')).test(data);
      };
      columns.forEach((c) => {
        const valueKey = c.valueKey || 'value';
        if (typeof i[valueKey] === 'string' && stringMatcher(i[valueKey], searchKeyword)) {
          hit = true;
        }
      });
      return hit;
    }));
  }

  renderRow = (item, rowIndex) => {
    const {
      id,
      columns,
      selectedItems,
      idKey,
      itemHeight,
      isIndexColumnVisible,
      isItemBorderVisible,
      isSelectColumnVisible,
      isSortable,
      onRowClick,
      onRowDoubleClick,
      onRowContextMenu,
    } = this.props;
    const isSelected = selectedItems.includes(item[idKey]);
    return (
      <Row
        id={`${id}-row-${rowIndex}`}
        key={item[idKey]}
        item={item}
        rowIndex={rowIndex}
        isIndexColumnVisible={isIndexColumnVisible}
        itemHeight={itemHeight}
        columns={columns}
        isSelected={isSelected}
        isSelectColumnVisible={isSelectColumnVisible}
        isItemBorderVisible={isItemBorderVisible}
        isSortable={isSortable}
        onSelectChange={this.handleItemSelectChange(item[idKey], isSelected)}
        onRowClick={onRowClick}
        onRowDoubleClick={onRowDoubleClick}
        onRowContextMenu={onRowContextMenu}
      />
    );
  }

  renderList = () => {
    const {
      id,
      className,
      items,
      selectedItems,
      columns,
      isIndexColumnVisible,
      height,
      width,
      itemHeight,
      columnHeaderHeight,
      isColumnHeaderVisible,
      isSearchable,
      isSelectColumnVisible,
      isSelectAllVisible,
      isShowOnlySelectedVisible,
      isAllSelected,
      isSortable,
      translations,
      reactInfiniteProps,
      onSortEnd,
    } = this.props;
    const {
      showOnlySelected,
      searchKeyword,
    } = this.state;
    // memoize filteredItems when props has not changed to improve performance
    const filteredItems = this.filter()(items, selectedItems, searchKeyword, showOnlySelected);
    const isHeaderVisible = (
      (isSelectAllVisible && !isColumnHeaderVisible)
      || (isSearchable)
      || (isShowOnlySelectedVisible)
    );
    // override from props or calculate from data
    const isAllSelectedValue = (
      isAllSelected !== null
        ? isAllSelected
        : (items.length > 0 && items.length === selectedItems.length)
    );
    return (
      <ListContainer id={id} className={className} height={height} width={width}>
        {isHeaderVisible && (
          <Header
            id={`${id}-header`}
            isColumnHeaderVisible={isColumnHeaderVisible}
            isSearchable={isSearchable}
            isSelectAllVisible={isSelectAllVisible}
            isShowOnlySelectedVisible={isShowOnlySelectedVisible}
            isAllSelected={isAllSelectedValue}
            isShowOnlySelected={showOnlySelected}
            disabled={items.length === 0}
            onSelectAllChange={this.handleSelectAllChange}
            onSearchChange={this.handleSearchChange}
            onShowOnlySelectedChange={this.handleShowOnlySelectedChange}
            translations={translations}
          />
        )}
        {isColumnHeaderVisible && (
          <ColumnHeader
            id={`${id}-column-header`}
            columns={columns}
            isSelectColumnVisible={isSelectColumnVisible}
            isSelectAllVisible={isSelectAllVisible}
            isIndexColumnVisible={isIndexColumnVisible}
            isAllSelected={isAllSelectedValue}
            height={columnHeaderHeight}
            onSelectAllChange={this.handleSelectAllChange}
          />
        )}
        <ResponsiveListContainer
          id={`${id}-items`}
          height={height}
          itemHeight={itemHeight}
          columnHeaderHeight={columnHeaderHeight}
          isHeaderVisible={isHeaderVisible}
          isColumnHeaderVisible={isColumnHeaderVisible}
          isSortable={isSortable}
          reactInfiniteProps={reactInfiniteProps}
          onSortEnd={onSortEnd}
        >
          {filteredItems.map(this.renderRow)}
          {!filteredItems.length && <NoResultsText>{translations.noResults}</NoResultsText>}
        </ResponsiveListContainer>
      </ListContainer>
    );
  }

  renderWithTheme = themeObj => (
    <ThemeProvider theme={themeObj}>
      {this.renderList()}
    </ThemeProvider>
  );

  render() {
    const { customTheme, theme } = this.props;
    if (customTheme) {
      return this.renderWithTheme(customTheme); // override with custom theme
    }
    if (!theme) {
      return this.renderWithTheme(themeDefaults); // use defaults if no theme is provided
    }
    return this.renderList(); // ThemeProvider is found!
  }
}
