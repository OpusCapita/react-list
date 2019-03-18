import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Infinite from 'react-infinite';
import { debounce } from 'debounce';

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
  border-bottom: 1px solid ${props => props.theme.colors.grey6};
  padding: 0;
  margin: 0;
`;

export default class ResponsiveListContainer extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    id: PropTypes.string.isRequired,
    height: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.oneOf(['auto']),
    ]).isRequired,
    itemHeight: PropTypes.number.isRequired,
    columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    columnHeaderHeight: PropTypes.number.isRequired,
    isHeaderVisible: PropTypes.bool.isRequired,
    isColumnHeaderVisible: PropTypes.bool.isRequired,
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
    if (this.props.height === 'auto') {
      window.addEventListener('resize', debounce(this.refreshElementHeights));
      window.addEventListener('orientationchange', this.refreshElementHeights); // for mobile support
    }
    this.refreshElementHeights();
  }

  componentDidUpdate(prevProps) {
    if (
      (prevProps.isColumnHeaderVisible !== this.props.isColumnHeaderVisible) ||
      (prevProps.isHeaderVisible !== this.props.isHeaderVisible)
    ) {
      this.refreshElementHeights();
    }
  }

  componentWillUnmount() {
    if (this.props.height === 'auto') {
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

  // List item
  renderItem = () => (data, index) => (
    <ItemContainer key={index}>
      { data }
    </ItemContainer>
  )

  render() {
    const {
      children,
      id,
      columns,
      itemHeight,
      columnHeaderHeight,
      isHeaderVisible,
      isColumnHeaderVisible,
      ...props
    } = this.props;
    const {
      listContainerHeight,
    } = this.state;
    let headerHeight = isColumnHeaderVisible ? columnHeaderHeight : 0;
    if (isHeaderVisible) headerHeight += 40;
    return (
      <ListContainer
        id={id}
        columns={columns}
        headerHeight={headerHeight}
        ref={(r) => { this.listContainerRef = r; }}
      >
        <Infinite
          containerHeight={listContainerHeight}
          elementHeight={itemHeight}
          {...props}
        >
          { React.Children.map(children, this.renderItem()) }
        </Infinite>
      </ListContainer>
    );
  }
}
