export default class Contact {
  constructor(name, surname, email, modDate, creDate, uuid) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.modDate = modDate;
    this.creDate = creDate;
    this.id = uuid;
  }

  changeModDate() {
    this.modDate = new Date().toLocaleDateString();
  }

  changeName(name) {
    this.name = name;
    this.changeModDate();
  }

  changeSurname(surname) {
    this.Surname = surname;
    this.changeModDate();
  }

  changeEmail(email) {
    this.email = email;
    this.changeModDate();
  }
}
