export default class Group {
  constructor(groupName, contactList, id) {
    this.groupName = groupName;
    this.contactList = contactList;
    this.id = id;
  }

  changeGroupName(name) {
    this.groupName = name;
  }

  addContact(contact) {
    this.contactList.push(contact);
  }

  deleteContact(contact) {
    const filteredArr = this.contactList.filter(
      (item) => item.id !== contact.id
    );

    this.contactList = filteredArr;
  }

  checkContact(contact) {
    return this.contactList.some((item) => {
      return item.id === contact.id;
    });
  }
}
