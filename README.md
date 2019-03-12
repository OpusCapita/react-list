# react-list

### Description
Highly configurable react list component

### Main features
* Virtualization with [react-infinite](https://github.com/seatgeek/react-infinite)
* Responsive or fixed size
* Drag'n'drop ordering (coming soon)
* Columns with headers
* Selectable items (coming soon)

### Installation
```
npm install @opuscapita/react-list
```

### Demo
View the [DEMO](https://opuscapita.github.io/react-list)

### Builds
#### UMD
The default build with compiled styles in the .js file. Also minified version available in the lib/umd directory.
#### CommonJS/ES Module
You need to configure your module loader to use `cjs` or `es` fields of the package.json to use these module types.
Also you need to configure sass loader, since all the styles are in sass format.
* With webpack use [resolve.mainFields](https://webpack.js.org/configuration/resolve/#resolve-mainfields) to configure the module type.
* Add [SASS loader](https://github.com/webpack-contrib/sass-loader) to support importing of SASS styles.

### API
| Prop name                | Type                    | Default                                      | Description                                 |
| ------------------------ | ----------------------- | -------------------------------------------- | ------------------------------------------- |
| __items__                | array of item objects   | __required__                                 | Array of items in the list                  |
| id                       | string                  | oc-react-list                                | Component base id                           |
| className                | string                  |                                              | Component class                             |
| columns                  | array of column objects | [{ valueKey: 'value', valueTitle: 'value' }] | Array of columns in the list                |
| idKey                    | string                  | 'id'                                         | ID key of item data                         |
| height                   | number or 'auto'        | 'auto'                                       | Height of the list in pixels                |
| width                    | number or 'auto'        | 'auto'                                       | Width of the list in pixels                 |
| itemHeight               | number                  | 40                                           | Height of the item in the list in pixels    |
| columnHeaderHeight       | number                  | 40                                           | Height of the column header in pixels       |
| showColumnHeader         | boolean                 | false                                        | Option to show column header                |
| showIndex                | boolean                 | false                                        | Option to show index number as first column |

#### `column` object attributes
| Name            | Type             | Default | Description                            |
| --------------- | ---------------- | ------- | -------------------------------------- |
| valueKey        | string           | 'value' | Value key in the list                  |
| valueTitle      | array of strings | 'Value' | Title text to display in column header |

### Code example
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
