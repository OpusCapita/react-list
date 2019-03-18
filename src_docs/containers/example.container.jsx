import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Switch, Route, Link } from 'react-router-dom';
import { Panel, Grid, Row, Col, Checkbox } from 'react-bootstrap';
import { theme } from '@opuscapita/oc-cm-common-layouts';
import GithubLogo from '../images/logo-github.svg';
import packageConfig from '../../package.json';
import Simple from '../components/simple.component';
import Column from '../components/column.component';

const packageDescription = packageConfig.description;
const packageName = packageConfig.name.replace('@opuscapita/', '');

const ListContainer = styled.div`
  padding: 20px;
  height: calc(100vh - 66px);
  overflow: auto;
`;

export default class ExampleContainer extends React.PureComponent {
  state = {
    columnHeaderHeight: 40,
    itemHeight: 40,
    isIndexColumnVisible: false,
    isItemBorderVisible: true,
    isColumnHeaderVisible: false,
    isSearchable: false,
    isSelectable: false,
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
        value={this.state[attr]}
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
        checked={this.state[attr]}
        onClick={() => this.setState({ [attr]: !this.state[attr] })}
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
              <Link to="/fixed-height" href="/fixed-height">Fixed height</Link>
              <br />
              <Link to="/fixed-size" href="/fixed-size">Fixed width and height</Link>
              <br />
            </Panel>
            <Panel style={{ padding: '20px' }}>
              {this.renderCheckbox('isIndexColumnVisible')}
              {this.renderCheckbox('isItemBorderVisible')}
              {this.renderCheckbox('isColumnHeaderVisible')}
              {this.renderCheckbox('isSearchable')}
              {this.renderCheckbox('isSelectable')}
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
                    <Route path="/" exact render={() => <Simple key="1" {...this.state} />} />
                    <Route path="/columns" render={() => <Column key="2" {...this.state} />} />
                    <Route path="/fixed-height" render={() => <Simple key="4" height={400} {...this.state} />} />
                    <Route path="/fixed-size" render={() => <Simple key="5" height={400} width={400} {...this.state} />} />
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
