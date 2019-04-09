/* Try to keep this as close to List as possible */
import React from 'react';
import memoize from 'memoize-one';
import PropTypes from 'prop-types';
import { arrayMove } from 'react-sortable-hoc';
import styled, { ThemeProvider, withTheme } from 'styled-components';
// Application imports ( later )
import Header from '../header.component';
import SortableRow from './sortable-row.component';
import { themeDefaults, themeShape } from '../theme';
import ColumnHeader from '../column-header.component';
import ResponsiveSortableListContainer from './responsive-sortable-list-container.component';

const {
  bool,
  func,
  shape,
  string,
  number,
  oneOf,
  arrayOf,
  oneOfType,
} = PropTypes;

const Container = styled.div`
  height: ${props => (props.height === 'auto' ? '100%' : `${props.height}px`)};
  width: ${props => (props.width === 'auto' ? '100%' : `${props.width}px`)};
`;


export default
@withTheme
class SortableList extends React.PureComponent {
  // Try to match these with List
  static propTypes = {
    id: string,                                             // new prop Element identifier string
    // # Theme & stylings
    theme: themeShape,                                      // prop from styled-components Themeprovider (if in use)
    customTheme: themeShape,                                // overriding the theme
    className: string,                                      // custom className

    // # Data props
    idKey: string,                                          // old prop - Key of id in list data
    items: arrayOf(shape({})).isRequired,                   // old prop - List item objects
    height: oneOfType([number, oneOf(['auto'])]),           // former listHeight
    width: oneOfType([number, oneOf(['auto'])]),            // new prop - listWidth
    itemHeight: number,                                     // former rowHeight
    columnHeaderHeight: number,                             // Height of columnHeader
    columns: arrayOf(shape({})),                            // old prop - Table columns
    translations: shape({                                   // Translate strings to new column props
      search: string,
      selectAll: string,
      showOnlySelected: string,
    }),
    selectedItems: arrayOf(oneOfType([number, string])),    // new prop - selectedItems
    reactInfinitiveProps: shape({}),                        // old prop

    // # Booleans
    isSearchable: bool,                                     // new prop to show search
    isSelectable: bool,                                     // new prop to determine if item can be selected
    isSelectAllVisible: bool,                               // new prop to show selectAll
    isColumnHeaderVisible: bool,                            // new prop to show/hide column headers
    isShowOnlySelectedVisible: bool,                        // new prop to show onlySelected
    isItemBorderVisible: bool,                              // new prop to show/hide item borders
    isIndexColumnVisible: bool,                             // former showIndex prop to show/hide index column
    isSortingDisabled: bool,                                // former disabled prop to enable/disable sorting
    useDragHandle: bool,                                    // Whether we want to use handle or not

    // # Actions and Event handlers
    onChange: func.isRequired,                              // old prop - to set newItems (used for onSortEnd)
    onRowClick: func,                                       // former onRowSelect
    onSelectedChange: func,                                 // new prop - to set selectedItems
    onRowDoubleClick: func,                                 // old prop - refer to List
    onRowRightClick: func,                                  // new prop - handle row right click

  };

  static defaultProps = {
    id: 'oc-react-sortable-list',
    theme: null,
    customTheme: null,
    className: '',

    idKey: 'id',
    height: 'auto',
    width: 'auto',
    itemHeight: 40,
    columnHeaderHeight: 40,
    columns: [{ valueKey: 'value', title: 'Value' }],
    translations: {
      search: 'Search',
      selectAll: 'All',
      showOnlySelected: 'Show only selected',
    },
    selectedItems: [],
    reactInfinitiveProps: {},

    isSearchable: false,
    isSelectable: false,
    isSelectAllVisible: false,
    isColumnHeaderVisible: false,
    isShowOnlySelectedVisible: false,
    isIndexColumnVisible: false,
    isItemBorderVisible: true,
    isSortingDisabled: false,
    useDragHandle: true,

    onRowClick: () => {},
    onRowRightClick: () => {},
    onRowDoubleClick: () => {},
    onSelectedChange: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      searchKeyword: '',
      selectedItem: null,
      showOnlySelected: false,
    };
  }

  /* Follow the implementation of List-component */
  handleOnSortEnd = ({ oldIndex, newIndex }) => {
    const { onChange, items } = this.props;
    const newItems = arrayMove(items, oldIndex, newIndex);
    onChange(newItems);
  }

  handleRowClick = (rowIndex, item) => {
    const { onRowClick } = this.props;
    this.setState({ selectedItem: rowIndex }, () => onRowClick(rowIndex, item));
  }

  handleRowDoubleClick = (rowIndex, item) => {
    const { onRowDoubleClick } = this.props;
    // original returns just id
    onRowDoubleClick(rowIndex, item);
  }

  handleRowRightClick = (rowIndex, item) => {
    const { onRowRightClick } = this.props;
    onRowRightClick(rowIndex, item);
  }

  handleSelectAllChange = () => {
    const {
      items, selectedItems, idKey, isSelectable, onSelectedChange,
    } = this.props;
    if (isSelectable) {
      if (items.length > selectedItems.length) {
        // SelectAll
        onSelectedChange(items.map(it => it[idKey]));
      } else {
        // DeselectAll
        onSelectedChange([]);
      }
    }
  }

  handleItemSelectChange = (itemId, isSelected) => () => {
    const { selectedItems, onSelectedChange } = this.props;
    if (isSelected) {
      onSelectedChange(selectedItems.filter(id => id !== itemId));
    } else {
      onSelectedChange(selectedItems.concat([itemId]));
    }
  }

  handleSearchChange = (searchKeyword) => {
    this.setState({ searchKeyword });
  }

  handleShowOnlySelectedChange = () => {
    this.setState({ showOnlySelected: !this.state.showOnlySelected });
  }

  filter = () => {
    const { idKey, columns } = this.props;
    // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#what-about-memoization
    return memoize((items, selectedItems, searchKeyWord, showOnlySelected) =>
      items.filter((i) => {
        let hit = false;
        if (showOnlySelected && !selectedItems.includes(i[idKey])) {
          return false;
        }
        if (searchKeyWord === '') {
          return true;
        }
        const stringMatcher = (data, keyword) => {
          let escapedKeyword = keyword;
          const specialChars = '[]\\^$.|?*+()';
          // If keyword val starts with a Regexp special character, we must escape it
          if (specialChars.includes(keyword[0])) escapedKeyword = `\\${keyword}`;
          return (new RegExp(escapedKeyword, 'i')).test(data);
        };
        // run columns through with stringMatcher
        columns.forEach((c) => {
          if (typeof i[c.valueKey] === 'string' && stringMatcher(i[c.valueKey], searchKeyWord)) {
            hit = true;
          }
        });
        return hit;
      }));
  }

  renderSortableRow = (item, rowIndex) => {
    const {
      id,
      idKey,
      columns,
      className,
      itemHeight,
      selectedItem,
      selectedItems,
      isSelectable,
      useDragHandle,
      isSortingDisabled,
      isItemBorderVisible,
      isIndexColumnVisible,
    } = this.props;

    const isSelected = selectedItems.includes(item[idKey]);
    // SortableElementHoc "swallows" these
    const sortableElementProps = {
      key: `${rowIndex}-${item[idKey]}`,
      index: rowIndex,
      value: item,
    };

    return (
      <SortableRow
        {...sortableElementProps}
        id={`${id}-row${rowIndex}`}
        item={item}
        className={className}
        columns={columns}
        rowIndex={rowIndex}
        selectedItem={selectedItem}
        itemHeight={itemHeight}
        isSelected={isSelected}
        isSelectable={isSelectable}
        useDragHandle={useDragHandle}
        isSortingDisabled={isSortingDisabled}
        isItemBorderVisible={isItemBorderVisible}
        isIndexColumnVisible={isIndexColumnVisible}
        onSelectChange={this.handleItemSelectChange(item[idKey], isSelected)}
      />
    );
  }

  renderSortableList = () => {
    const {
      id,
      // Theme & styling
      className,
      // Data props
      height, width, itemHeight, items, translations,
      selectedItems, columns, columnHeaderHeight, reactInfinitiveProps,
      // Booleans
      isSelectAllVisible, isColumnHeaderVisible, isIndexColumnVisible,
      isSelectable, isSearchable, isShowOnlySelectedVisible, isSortingDisabled,
    } = this.props;
    const { selectedItem, showOnlySelected, searchKeyword } = this.state;

    const filteredItems = this.filter()(items, selectedItems, searchKeyword, showOnlySelected);

    const isHeaderVisible = (
      (isSelectAllVisible && !isColumnHeaderVisible) ||
      (isSearchable) ||
      (isShowOnlySelectedVisible)
    );

    const isAllSelected = items.length > 0 && items.length === selectedItems.length;

    return (
      <Container id={`${id}-container`} className={className} height={height} width={width}>
        { isHeaderVisible && (
          <Header
            id={`${id}-header`}
            isSearchable={isSearchable}
            isAllSelected={isAllSelected}
            isShowOnlySelected={showOnlySelected}
            isSelectAllVisible={isSelectAllVisible}
            isColumnHeaderVisible={isColumnHeaderVisible}
            isShowOnlySelectedVisible={isShowOnlySelectedVisible}
            disabled={items.length === 0}
            onSelectAllChange={this.handleSelectAllChange}
            onSearchChange={this.handleSearchChange}
            onShowOnlySelectedChange={this.handleShowOnlySelectedChange}
            translations={translations}
          />
          )}
        { isColumnHeaderVisible && (
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
        <ResponsiveSortableListContainer
          id={`${id}-items`}
          height={height}
          columnHeaderHeight={columnHeaderHeight}
          isColumnHeaderVisible={isHeaderVisible}
          isHeaderVisible={isHeaderVisible}
          itemHeight={itemHeight}
          selectedItem={selectedItem}
          onSortEnd={this.handleOnSortEnd}
          disabled={isSortingDisabled}
          reactInfinitiveProps={reactInfinitiveProps}
          useDragHandle
        >
          { filteredItems.map(this.renderSortableRow) }
        </ResponsiveSortableListContainer>
      </Container>
    );
  }

  renderWithTheme = themeObj => (
    <ThemeProvider theme={themeObj}>
      { this.renderSortableList() }
    </ThemeProvider>
  );

  render() {
    const { customTheme, theme } = this.props;
    if (customTheme) {
      return this.renderWithTheme(customTheme);
    }
    if (!theme) {
      return this.renderWithTheme(themeDefaults);
    }
    return this.renderSortableList();
  }
}
