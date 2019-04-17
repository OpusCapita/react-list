import faker from 'faker';

export const getSimpleData = (count) => {
  const items = [];
  for (let i = 1; i <= count; i += 1) {
    items.push({
      id: faker.random.uuid(),
      value: faker.name.findName(),
    });
  }
  return {
    items,
  };
};

export const getGroupData = () => {
  const groupId1 = faker.random.uuid();
  const groupId2 = faker.random.uuid();
  const groupId3 = faker.random.uuid();
  return [
    { id: groupId1, value: faker.internet.domainName(), isGroup: true },
    { id: faker.random.uuid(), value: faker.internet.ip(), groupId: groupId1 },
    { id: faker.random.uuid(), value: faker.internet.ip(), groupId: groupId1 },
    { id: faker.random.uuid(), value: faker.internet.ip(), groupId: groupId1 },
    { id: faker.random.uuid(), value: faker.internet.ip(), groupId: groupId1 },
    { id: faker.random.uuid(), value: faker.internet.ip(), groupId: groupId1 },
    { id: faker.random.uuid(), value: faker.internet.ip(), groupId: groupId1 },
    { id: groupId2, value: faker.internet.domainName(), isGroup: true },
    { id: faker.random.uuid(), value: faker.internet.ip(), groupId: groupId2 },
    { id: faker.random.uuid(), value: faker.internet.ip(), groupId: groupId2 },
    { id: faker.random.uuid(), value: faker.internet.ip(), groupId: groupId2 },
    { id: faker.random.uuid(), value: faker.internet.ip(), groupId: groupId2 },
    { id: faker.random.uuid(), value: faker.internet.ip(), groupId: groupId2 },
    { id: groupId3, value: faker.internet.domainName(), isGroup: true },
    { id: faker.random.uuid(), value: faker.internet.ip(), groupId: groupId3 },
    { id: faker.random.uuid(), value: faker.internet.ip(), groupId: groupId3 },
    { id: faker.random.uuid(), value: faker.internet.ip(), groupId: groupId3 },
    { id: faker.random.uuid(), value: faker.internet.ip(), groupId: groupId3 },
    { id: faker.random.uuid(), value: faker.internet.ip(), groupId: groupId3 },
  ];
};

export const getNewColumnItem = () => (
  {
    id: faker.random.uuid(),
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    title: faker.name.title(),
    phone: faker.phone.phoneNumber(),
    company: faker.company.companyName(),
  }
);

export const getColumnData = (count) => {
  const items = [];
  for (let i = 1; i <= count; i += 1) {
    items.push(getNewColumnItem());
  }
  const columns = [
    { valueKey: 'firstname', title: 'Firstname', width: 100 },
    { valueKey: 'lastname', title: 'Lastname', width: 100 },
    { valueKey: 'title', title: 'Title' },
    { valueKey: 'phone', title: 'Phone number', alignment: 'flex-end', width: 150 }, // eslint-disable-line
    { valueKey: 'company', title: 'Company' },
  ];
  return {
    items,
    columns,
  };
};
