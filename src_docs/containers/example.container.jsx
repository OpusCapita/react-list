import React from 'react';
import styled from 'styled-components';
import { Switch, Route, Link } from 'react-router-dom';
import { Panel, Grid, Row, Col, Checkbox } from 'react-bootstrap';
import GithubLogo from '../images/logo-github.svg';
import packageConfig from '../../package.json';
import Simple from '../components/simple.component';
import Column from '../components/column.component';

const packageDescription = packageConfig.description;
const packageName = packageConfig.name.replace('@opuscapita/', '');

const ListContainer = styled.div`
  padding: 20px;
  height: calc(100vh - 116px);
  overflow: auto;
`;

export default class ExampleContainer extends React.PureComponent {
  state = {
    showIndex: false,
  }

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={5} md={2}>
            <h3 style={{ marginTop: '10px' }}>
              {packageDescription}
            </h3>
          </Col>
          <Col xs={5} md={8} style={{ marginTop: '5px' }}>
            <Checkbox
              onClick={() => this.setState({ showIndex: !this.state.showIndex })}
            >
              Show index
            </Checkbox>
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
              <Link to="/columns-header" href="/columns-header">Columns with header</Link>
              <br />
              <Link to="/fixed-height" href="/fixed-height">Fixed height</Link>
              <br />
              <Link to="/fixed-size" href="/fixed-size">Fixed width and height</Link>
              <br />
            </Panel>
          </Col>
          <Col xs={8} md={10}>
            <Panel>
              <ListContainer>
                <Switch>
                  <Route path="/" render={() => <Simple key="1" {...this.state} />} />
                  <Route path="/columns" render={() => <Column key="2" {...this.state} />} />
                  <Route path="/columns-header" render={() => <Column key="3" showColumnHeader {...this.state} />} />
                  <Route path="/fixed-height" render={() => <Simple key="4" height={400} {...this.state} />} />
                  <Route path="/fixed-size" render={() => <Simple key="5" height={400} width={400} {...this.state} />} />
                </Switch>
              </ListContainer>
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}
