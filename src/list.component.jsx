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
    }),
    customTheme: themeShape, // theme override
    reactInfiniteProps: PropTypes.shape({}),

    // Booleans
    isSearchable: PropTypes.bool,
    isSelectable: PropTypes.bool,
    isSelectAllVisible: PropTypes.bool,
    isShowOnlySelectedVisible: PropTypes.bool,
    isColumnHeaderVisible: PropTypes.bool,
    isIndexColumnVisible: PropTypes.bool,
    isItemBorderVisible: PropTypes.bool,

    // actions
    onSelectedChange: PropTypes.func,
    onRowClick: PropTypes.func,
    onRowDoubleClick: PropTypes.func,
    onRowRightClick: PropTypes.func,
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
    },
    customTheme: null,
    reactInfiniteProps: {},
    isSearchable: false,
    isSelectable: false,
    isSelectAllVisible: false,
    isShowOnlySelectedVisible: false,
    isColumnHeaderVisible: false,
    isIndexColumnVisible: false,
    isItemBorderVisible: true,
    onSelectedChange: () => {},
    onRowClick: () => {},
    onRowDoubleClick: () => {},
    onRowRightClick: () => {},
  }

  constructor(props) {
    super(props);
    this.state = {
      searchKeyword: '',
      showOnlySelected: false,
    };
  }

  handleRowClick = (rowIndex, item) => {
    const {
      onRowClick,
    } = this.props;
    onRowClick(rowIndex, item);
  }

  handleRowDoubleClick = (rowIndex, item) => {
    const {
      onRowDoubleClick,
    } = this.props;
    onRowDoubleClick(rowIndex, item);
  }

  handleRowRightClick = (rowIndex, item) => {
    const {
      onRowRightClick,
    } = this.props;
    onRowRightClick(rowIndex, item);
  }

  handleSelectAllChange = () => {
    const {
      items,
      selectedItems,
      idKey,
      isSelectable,
      onSelectedChange,
    } = this.props;
    if (isSelectable) {
      if (items.length > selectedItems.length) {
        // Select all
        onSelectedChange(items.map(i => i[idKey]));
      } else {
        // Deselect all
        onSelectedChange([]);
      }
    }
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
    this.setState({ showOnlySelected: !this.state.showOnlySelected });
  };

  filter = () => {
    const {
      idKey,
      columns,
    } = this.props;
    // 
    return memoize((items, selectedItems, searchKeyword, showOnlySelected) =>
      items.filter((i) => {
        let hit = false;
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
          if (typeof i[c.valueKey] === 'string' && stringMatcher(i[c.valueKey], searchKeyword)) {
            hit = true;
          }
        });
        return hit;
      }));
  }

  renderRow = (item, rowIndex) => {
    const {
      id,
      selectedItems,
      idKey,
      itemHeight,
      isIndexColumnVisible,
      isItemBorderVisible,
      columns,
      isSelectable,
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
        isSelectable={isSelectable}
        isItemBorderVisible={isItemBorderVisible}
        onSelectChange={this.handleItemSelectChange(item[idKey], isSelected)}
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
      isSelectable,
      isSelectAllVisible,
      isShowOnlySelectedVisible,
      translations,
      reactInfiniteProps,
    } = this.props;
    const {
      showOnlySelected,
      searchKeyword,
    } = this.state;
    const filteredItems = this.filter()(items, selectedItems, searchKeyword, showOnlySelected);
    const isHeaderVisible = (
      (isSelectAllVisible && !isColumnHeaderVisible) ||
      (isSearchable) ||
      (isShowOnlySelectedVisible)
    );
    const isAllSelected = items.length > 0 && items.length === selectedItems.length;
    return (
      <ListContainer id={id} className={className} height={height} width={width}>
        {isHeaderVisible && (
          <Header
            id={`${id}-header`}
            isColumnHeaderVisible={isColumnHeaderVisible}
            isSearchable={isSearchable}
            isSelectAllVisible={isSelectAllVisible}
            isShowOnlySelectedVisible={isShowOnlySelectedVisible}
            isAllSelected={isAllSelected}
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
            isSelectable={isSelectable}
            isSelectAllVisible={isSelectAllVisible}
            isIndexColumnVisible={isIndexColumnVisible}
            isAllSelected={isAllSelected}
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
          reactInfiniteProps={reactInfiniteProps}
        >
          {filteredItems.map(this.renderRow)}
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
