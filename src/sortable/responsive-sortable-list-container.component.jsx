import React from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'debounce';
import Infinite from 'react-infinite';
import styled from 'styled-components';
import { SortableContainer } from "react-sortable-hoc";

/* Try this once more with Sami's way */
/* SortableContainer might "swallow" our props so you might need
 * to add those as double in the component
*/

const ListContainer = styled.div`
  height: ${props => `calc(100% - ${props.headerHeight}px)`};
  width: 100%;
  border: 1px solid ${props => props.theme.colors.grey7};
  padding: 0;
  margin: 0;
`;

const ItemContainer = styled.div`
  flex-direction: column;
  min-height: 0px;
  min-width: 100%;
  overflow: hidden;
  padding: 0;
  margin: 0;
`;

export default
@SortableContainer
class ResponsiveSortableListContainer extends React.PureComponent {
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
    reactInfinitiveProps: PropTypes.shape({}).isRequired,
  }

  constructor(props) {
    super(props);
    // refs for delivering container and item heights to infinite list
    this.listContainerRef = null;
    this.state = {
      listContainerHeight: props.height === 'auto' ? 400 : (props.height - 2), // 2px border
    };
  }

  componentDidMount() {
    if (this.props.height === 'auto') {
      window.addEventListener('resize', debounce(this.refreshElementHeights));
      window.addEventListener('orientationchange', this.refreshElementHeights); // for mobile
    }
    this.refreshElementHeights();
  }

  componentDidUpdate(prevProps) {
    if (
      (prevProps.isColumnHeaderVisible !== this.props.isColumnHeaderVisible) ||
      (prevProps.isHeaderVisible !== this.props.isHeaderVisible) ||
      (prevProps.columnHeaderHeight !== this.props.columnHeaderHeight) ||
      (prevProps.height !== this.props.height)
    ) {
      this.refreshElementHeights();
    }
  }

  componentWillUnmount = () => {
    if (this.props.height === 'auto') {
      window.removeEventListener('resize', debounce(this.refreshElementHeights));
      window.removeEventListener('orientationchange', this.refreshElementHeights);
    }
  }

  getInfiniteContainer = () => document.getElementById(`${this.props.id}`);

  refreshElementHeights = () => {
    if (this.listContainerRef) {
      this.setState({
        listContainerHeight: this.listContainerRef.clientHeight,
      });
    }
  }

  renderItem = () => (data, index) => (
    <ItemContainer key={index}>
      { data }
    </ItemContainer>
  )


  render() {
    const {
      children,
      id,
      itemHeight,
      columnHeaderHeight,
      isHeaderVisible,
      isColumnHeaderVisible,
      reactInfinitiveProps,
    } = this.props;
    const { listContainerHeight } = this.state;
    let headerHeight = isColumnHeaderVisible ? columnHeaderHeight : 0;
    if (isHeaderVisible) headerHeight += 40;
    return (
      <ListContainer
        id={id}
        headerHeight={headerHeight}
        ref={(r) => { this.listContainerRef = r; }}
      >
        <Infinite
          getContainer={this.getInfiniteContainer()}
          containerHeight={listContainerHeight}
          elementHeight={itemHeight}
          {...reactInfinitiveProps}
        >
          { React.Children.map(children, this.renderItem()) }
        </Infinite>
      </ListContainer>
    );
  }
}