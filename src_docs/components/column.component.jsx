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
        title: faker.name.title(),
        phone: faker.phone.phoneNumber(),
        company: faker.company.companyName(),
      });
    }
    this.columns = [
      { valueKey: 'firstname', title: 'Firstname', width: 100 },
      { valueKey: 'lastname', title: 'Lastname', width: 100 },
      { valueKey: 'title', title: 'Title' },
      { valueKey: 'phone', title: 'Phone number', alignment: 'flex-end', width: 150 }, // eslint-disable-line
      { valueKey: 'company', title: 'Company' },
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
