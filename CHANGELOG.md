# Changelog

* In general follow (https://docs.npmjs.com/getting-started/semantic-versioning) versioning.

## <next>
* Added `highlightedItems` prop
* Maximum length of the search container is now set to 300px

## 1.1.2
* Fixed `onRowDoubleClick` 
* 
## 1.1.1
* Fixed `onRowClick` 
  
## 1.1.0
* Add `dragItemZindex` prop for raising the SortableItems z-index on top of e.g. bootstrap Modal.
* Added new example to show `dragItemZindex` in action.
* Removed the right border of the last header column

## 1.0.0
* Sorting with drag'n'drop
* Added `isSortable` and `onSortEnd` props

## 0.6.0
* Renamed `onRowRightClick` to `onRowContextMenu`, because that's the correct one to use, there's no onRightClick.
* Added `isAlwaysVisible` special attribute to show item even if filter/selection doesn't match

## 0.5.1
* New translation object string `noResults` is now displayed when there's no list items to show

## 0.5.0
* Skipped 

## 0.4.0
* Added more possibilities to customize list functionality
* Change `isSelectable` prop to `isSelectColumnVisible` (list can be selectable even if select column is not visible)
* Add `onRowClick`, `onRowDoubleClick`, `onRowRightClick`, `onSelectAllClick` and `isAllSelected` props
* Add 'auto' as accepted value to column width
* Fix search when valueType is not defined on column to default to string

## 0.3.2
* Fix `render` function index parameter

## 0.3.1
* Fix `render` function index parameter

## 0.3.0
* Add `render` custom renderer prop for column

## 0.2.1
* Upgrade `@opuscapita/react-searchbar` to fix bugs

## 0.2.0
* Add `isItemBorderVisible` prop

## 0.1.0
* Initial release
