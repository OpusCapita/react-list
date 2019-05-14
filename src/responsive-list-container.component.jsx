import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { sortableContainer, sortableElement } from 'react-sortable-hoc';
import Infinite from 'react-infinite';
import { debounce } from 'debounce';

const ListContainer = styled.div`
  height: ${props => `calc(100% - ${props.headerHeight}px)`};
  width: 100%;
  border: 1px solid ${props => props.theme.colors.grey7};
  padding: 0;
  margin: 0;
  overflow: hidden;
`;

const ItemContainer = styled.div`
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 0px;
  min-width: 0;
  overflow: hidden;
  padding: 0;
  margin: 0;
`;

const Item = ({ value }) => <ItemContainer>{value}</ItemContainer>;
Item.propTypes = {
  value: PropTypes.node.isRequired,
};

const InfiniteList = ({ items, reactInfiniteProps }) => (
  <Infinite {...reactInfiniteProps}>
    {items.map((value, index) => (
      <Item
        key={`item-${index}`} // eslint-disable-line
        index={index}
        value={value}
      />
    ))}
  </Infinite>
);
InfiniteList.propTypes = {
  items: PropTypes.array.isRequired, // eslint-disable-line
  reactInfiniteProps: PropTypes.shape({}).isRequired,
};

const SortableItem = sortableElement(Item);
const SortableInfiniteList = sortableContainer(({ items, reactInfiniteProps }) => (
  <Infinite {...reactInfiniteProps}>
    {items.map((value, index) => (
      <SortableItem
        key={`item-${index}`} // eslint-disable-line
        index={index}
        value={value}
      />
    ))}
  </Infinite>
));
SortableInfiniteList.propTypes = {
  items: PropTypes.array.isRequired, // eslint-disable-line
  reactInfiniteProps: PropTypes.shape({}).isRequired,
};

export default class ResponsiveListContainer extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    id: PropTypes.string.isRequired,
    height: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.oneOf(['auto']),
    ]).isRequired,
    itemHeight: PropTypes.number.isRequired,
    columnHeaderHeight: PropTypes.number.isRequired,
    isHeaderVisible: PropTypes.bool.isRequired,
    isColumnHeaderVisible: PropTypes.bool.isRequired,
    isSortable: PropTypes.bool.isRequired,
    reactInfiniteProps: PropTypes.shape({}).isRequired,
    onSortEnd: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    // refs for delivering container and item heights to infinite list
    this.listContainerRef = null;
    this.state = {
      listContainerHeight: props.height === 'auto' ? 400 : (props.height - 2), // 2px borders
    };
  }

  componentDidMount() {
    const { height } = this.props;
    if (height === 'auto') {
      window.addEventListener('resize', debounce(this.refreshElementHeights));
      window.addEventListener('orientationchange', this.refreshElementHeights); // for mobile support
    }
    this.refreshElementHeights();
  }

  componentDidUpdate(prevProps) {
    const {
      isColumnHeaderVisible,
      isHeaderVisible,
      columnHeaderHeight,
      height,
    } = this.props;
    if (
      (prevProps.isColumnHeaderVisible !== isColumnHeaderVisible)
      || (prevProps.isHeaderVisible !== isHeaderVisible)
      || (prevProps.columnHeaderHeight !== columnHeaderHeight)
      || (prevProps.height !== height)
    ) {
      this.refreshElementHeights();
    }
  }

  componentWillUnmount() {
    const { height } = this.props;
    if (height === 'auto') {
      window.removeEventListener('resize', debounce(this.refreshElementHeights));
      window.removeEventListener('orientationchange', this.refreshElementHeights); // for mobile support
    }
  }

  // Refresh heights for the list
  refreshElementHeights = () => {
    if (this.listContainerRef) {
      this.setState({
        listContainerHeight: this.listContainerRef.clientHeight,
      });
    }
  }

  render() {
    const {
      children,
      id,
      itemHeight,
      columnHeaderHeight,
      isHeaderVisible,
      isColumnHeaderVisible,
      isSortable,
      reactInfiniteProps,
      onSortEnd,
    } = this.props;
    const {
      listContainerHeight,
    } = this.state;
    const listProps = {
      reactInfiniteProps: {
        containerHeight: listContainerHeight,
        elementHeight: itemHeight,
        ...reactInfiniteProps,
      },
      items: React.Children.toArray(children),
      isSortable,
      onSortEnd,
    };
    let headerHeight = isColumnHeaderVisible ? columnHeaderHeight : 0;
    if (isHeaderVisible) headerHeight += 40;
    return (
      <ListContainer
        id={id}
        headerHeight={headerHeight}
        ref={(r) => { this.listContainerRef = r; }}
      >
        { isSortable
          ? <SortableInfiniteList {...listProps} useDragHandle />
          : <InfiniteList {...listProps} />
        }
      </ListContainer>
    );
  }
}
