import React from 'react';
import faker from 'faker';
import List from '../../src/index';

export default class ColumnList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: [],
    };
    this.items = [];
    for (let i = 1; i <= 50; i += 1) {
      this.items.push({
        id: i,
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        title: faker.name.title,
        jobtitle: faker.name.jobTitle(),
        jobarea: faker.name.jobArea(),
      });
    }
    this.columns = [
      { valueKey: 'firstname', title: 'Firstname' },
      { valueKey: 'lastname', title: 'Lastname' },
      { valueKey: 'title', title: 'Title' },
      { valueKey: 'jobtitle', title: 'Job title' },
      { valueKey: 'jobarea', title: 'Job area' },
    ];
  }

  onSelectedChange = (selectedItems) => {
    this.setState({ selectedItems });
  }

  render() {
    const {
      selectedItems,
    } = this.state;
    return (
      <List
        columns={this.columns}
        items={this.items}
        selectedItems={selectedItems}
        onSelectedChange={this.onSelectedChange}
        {...this.props}
      />
    );
  }
}
