export default class AddressBook {
  constructor(contactList, groupList) {
    this.contactList = contactList;
    this.groupList = groupList;
  }

  //group methods

  addNewGroup(group) {
    this.groupList.push(group);
  }

  modifyGroup(group, value, newValue) {
    const item = this.groupList.find((item) => {
      return item.name === group.name;
    });
    item[value] = newValue;
  }

  deleteGroup(group) {
    const filteredArr = this.groupList.filter((item) => item.id !== group.id);

    this.groupList = filteredArr;
  }
  
  //contact methods

  deleteContact(contact) {
    const filteredArr = this.contactList.filter(
      (item) => item.id !== contact.id
    );

    this.contactList = filteredArr;
  }

  addNewContact(contact) {
    this.contactList.push(contact);
  }

  findContact(contact) {
    return this.contactList.find((item) => {
      return item.name === contact.name;
    });
  }

  modifyContact(contact, value, newValue) {
    const item = this.contactList.find((item) => {
      return item.name === contact.name;
    });
    item[value] = newValue;
  }
}
