# react-list

### Description
Highly configurable react list component

### Main features
* Virtualization with [react-infinite](https://github.com/seatgeek/react-infinite)
* Responsive or fixed size
* Columns with headers
* Selectable items
* Drag'n'drop ordering (coming soon)

### Installation
```
npm install @opuscapita/react-list
```

### Demo
View the [DEMO](https://opuscapita.github.io/react-list/)

### Change log
View the [Change log](CHANGELOG.md)

### Migrate guide
View the [Migrate guide](MIGRATEGUIDE.md) between major versions

### Builds
#### UMD
The default build with compiled styles in the .js file. Also minified version available in the lib/umd directory.
#### CommonJS/ES Module
You need to configure your module loader to use `cjs` or `es` fields of the package.json to use these module types.
Also you need to configure sass loader, since all the styles are in sass format.
* With webpack use [resolve.mainFields](https://webpack.js.org/configuration/resolve/#resolve-mainfields) to configure the module type.
* Add [SASS loader](https://github.com/webpack-contrib/sass-loader) to support importing of SASS styles.

### API
| Prop name                 | Type                    | Default / params                             | Description                                 |
| ------------------------- | ----------------------- | -------------------------------------------- | ------------------------------------------- |
| __items__                 | array of item objects   | __required__                                 | Array of items in the list                  |
| id                        | string                  | oc-react-list                                | Component base id                           |
| className                 | string                  |                                              | Component class                             |
| columns                   | array of column objects | [{ valueKey: 'value', valueTitle: 'value' }] | Array of columns in the list                |
| selectedItems             | array of id's           | []                                           | Array of selected item id's                 |
| height                    | number or 'auto'        | 'auto'                                       | Height of the list in pixels                |
| width                     | number or 'auto'        | 'auto'                                       | Width of the list in pixels                 |
| itemHeight                | number                  | 40                                           | Height of the item in the list in pixels    |
| columnHeaderHeight        | number                  | 40                                           | Height of the column header in pixels       |
| idKey                     | string                  | 'id'                                         | ID key of item data                         |
| translations              | object                  | { search: 'Search', selectAll: 'All', showOnlySelected: 'Show only selected', noResults: 'There are no items to show in this list.' } | Translations |
| customTheme               | object                  | [themeDefaults](src/theme.js)                | Override theme                              |
| isSearchable              | boolean                 | false                                        | Is list searchable                          |
| isSelectColumnVisible     | boolean                 | false                                        | Is select column visible                    |
| isSelectAllVisible        | boolean                 | false                                        | Is select all checkbox visible              |
| isShowOnlySelectedVisible | boolean                 | false                                        | Is show only selected checkbox visible      |
| isColumnHeaderVisible     | boolean                 | false                                        | Is column header visible                    |
| isIndexColumnVisible      | boolean                 | false                                        | Is index column visible                     |
| isItemBorderVisible       | boolean                 | true                                         | Is border visible between items             |
| isSortable                | boolean                 | false                                        | Enable drag'n'drop sorting                  |
| onSelectedChange          | function                | (selectedIds: array)                         | Callback for selected items change          |
| onRowClick                | function                | (item: object, rowIndex: number)             | Callback for row click                      |
| onRowDoubleClick          | function                | (item: object, rowIndex: number)             | Callback for row double click               |
| onRowContextMenu          | function                | (item: object, rowIndex: number)             | Callback for row context menu (right click) |
| onSelectAllClick          | function                |                                              | Callback for select all click               |
| onSortEnd                 | function                | ({ oldIndex: number, newIndex: number })     | Callback for sort end                       |

#### `column` object attributes
| Name            | Type             | Default / Parameters             | Description                            |
| --------------- | ---------------- | -------------------------------- | -------------------------------------- |
| valueKey        | string           | 'value'                          | Value key in the list                  |
| title           | array of strings | 'Value'                          | Title text to display in column header |
| width           | number or 'auto' | 200                              | Column width in pixels                 |
| alignment       | string           | 'flex-start'                     | Value for `justify-content` CSS rule   |
| render          | function         | (item: object, rowIndex: number) | Custom renderer function               |

#### special item attributes
| Name            | Type             | Default / Parameters             | Description                                                       |
| --------------- | ---------------- | -------------------------------- | ----------------------------------------------------------------- |
| isAlwaysVisible | boolean          | undefined                        | Should this item be always visible even if filters don't match it |

### Theme
You can use styled-components ThemeProvider to provide theme.
If no ThemeProvider is found, default theme object is used.
You can always override theme with customTheme prop.

### Code example

## Simple data
```jsx
import React from 'react';
import List from '@opuscapita/react-list';

export default class ReactView extends React.Component {
  render() {
    const items = [
      { id: 1, value: 'item 1' },
      { id: 2, value: 'item 2' },
      { id: 3, value: 'item 3' },
    ];
    return (
      <List
        items={items}
      />
    );
  }
}
```

## Column list with custom ID field, column header visible, sorting enabled
```jsx
import React from 'react';
import List from '@opuscapita/react-list';
import arrayMove from 'array-move';

export default class ReactView extends React.Component {
  state = {
    items: [
      { itemId: 1, name: 'Valve', price: 15.99, tax: 24 },
      { itemId: 2, name: 'Crankshaft', price: 359.99, tax: 24 },
      { itemId: 3, name: 'Carburetor', price: 299.99, tax: 24 },
    ],
  }

  handleSortEnd = ({ oldIndex, newIndex }) => {
    const { items } = this.state;
    this.setState({
      items: arrayMove(items, oldIndex, newIndex),
    });
  };

  render() {
    const columns = [
      { valueKey: 'name', valueTitle: 'Item' },
      { valueKey: 'price', valueTitle: 'Price' },
      { valueKey: 'tax', valueTitle: 'Tax %' },
    ];
    const items = [
      { itemId: 1, name: 'Valve', price: 15.99, tax: 24 },
      { itemId: 2, name: 'Crankshaft', price: 359.99, tax: 24 },
      { itemId: 3, name: 'Carburetor', price: 299.99, tax: 24 },
    ];
    return (
      <List
        columns={columns}
        items={items}
        idKey="itemId"
        isColumnHeaderVisible
        isSortable
        onSortEnd={handleSortEnd}
      />
    );
  }
}
```
