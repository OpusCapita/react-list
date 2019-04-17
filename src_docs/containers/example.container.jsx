import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Switch, Route, Link } from 'react-router-dom';
import {
  Panel,
  Grid,
  Row,
  Col,
  Checkbox,
} from 'react-bootstrap';
import { theme } from '@opuscapita/oc-cm-common-layouts';
import GithubLogo from '../images/logo-github.svg';
import packageConfig from '../../package.json';
import SimpleList from '../components/simple-list.component';
import CustomRenderList from '../components/custom-render-list.component';
import GroupList from '../components/group-list.component';
import { getColumnData, getSimpleData, getGroupData } from '../constants/data';

const packageDescription = packageConfig.description;
const packageName = packageConfig.name.replace('@opuscapita/', '');

const ListContainer = styled.div`
  padding: 20px;
  height: calc(100vh - 66px);
  overflow: auto;
`;

const simpleListData = getSimpleData(100);
const columnListData = getColumnData(100);
const groupListData = getGroupData();

export default class ExampleContainer extends React.PureComponent {
  state = {
    // default props for react-list component
    columnHeaderHeight: 40,
    itemHeight: 40,
    isIndexColumnVisible: false,
    isItemBorderVisible: true,
    isColumnHeaderVisible: false,
    isSearchable: false,
    isSelectColumnVisible: false,
    isSelectAllVisible: false,
    isShowOnlySelectedVisible: false,
  }

  changeNumberProp = prop => (e) => {
    const val = Number(e.target.value);
    this.setState({ [prop]: val });
  }

  renderNumberInput = attr => (
    <p>
      <input
        type="number"
        value={this.state[attr]} // eslint-disable-line
        onChange={this.changeNumberProp(attr)}
        style={{ width: '60px' }}
      />
      {' '}
      {attr}
    </p>
  )

  renderCheckbox = attr => (
    <p>
      <Checkbox
        inline
        checked={this.state[attr]} // eslint-disable-line
        onChange={() => this.setState({ [attr]: !this.state[attr] })} // eslint-disable-line
      >
        {attr}
      </Checkbox>
    </p>
  )

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={10}>
            <h3 style={{ marginTop: '10px' }}>
              {packageDescription}
            </h3>
          </Col>
          <Col xs={2}>
            <a
              href={`https://github.com/OpusCapita/${packageName}`}
              style={{ marginTop: '20px', display: 'block' }}
            >
              <GithubLogo />
            </a>
          </Col>
        </Row>
        <Row>
          <Col xs={4} md={2}>
            <Panel style={{ padding: '20px' }}>
              <Link to="/" href="/">Simple</Link>
              <br />
              <Link to="/columns" href="/columns">Columns</Link>
              <br />
              <Link to="/custom-render" href="/custom-render">Custom render</Link>
              <br />
              <Link to="/fixed-height" href="/fixed-height">Fixed height</Link>
              <br />
              <Link to="/fixed-size" href="/fixed-size">Fixed width and height</Link>
              <br />
              <Link to="/groups" href="/groups">Groups</Link>
              <br />
            </Panel>
            <Panel style={{ padding: '20px' }}>
              {this.renderCheckbox('isIndexColumnVisible')}
              {this.renderCheckbox('isItemBorderVisible')}
              {this.renderCheckbox('isColumnHeaderVisible')}
              {this.renderCheckbox('isSearchable')}
              {this.renderCheckbox('isSelectColumnVisible')}
              {this.renderCheckbox('isSelectAllVisible')}
              {this.renderCheckbox('isShowOnlySelectedVisible')}
              {this.renderNumberInput('itemHeight')}
              {this.renderNumberInput('columnHeaderHeight')}
            </Panel>
          </Col>
          <Col xs={8} md={10}>
            <Panel>
              <ThemeProvider theme={theme}>
                <ListContainer>
                  <Switch>
                    <Route path="/" exact render={() => <SimpleList key="1" items={simpleListData.items} {...this.state} />} />
                    <Route path="/columns" render={() => <SimpleList key="2" items={columnListData.items} columns={columnListData.columns} {...this.state} />} />
                    <Route path="/custom-render" render={() => <CustomRenderList key="3" {...this.state} />} />
                    <Route path="/fixed-height" render={() => <SimpleList key="4" items={columnListData.items} columns={columnListData.columns} height={400} {...this.state} />} />
                    <Route path="/fixed-size" render={() => <SimpleList key="5" items={columnListData.items} columns={columnListData.columns} height={400} width={400} {...this.state} />} />
                    <Route path="/groups" render={() => <GroupList key="6" items={groupListData} {...this.state} />} />
                  </Switch>
                </ListContainer>
              </ThemeProvider>
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}
