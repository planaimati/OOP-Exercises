class Contact {
  constructor(name, surname, email, modDate, creDate, uuid) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.modDate = modDate;
    this.creDate = creDate;
    this.uuid = uuid;
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

const Jakub = new Contact(
  "Jakub",
  "Zengruba",
  "jakub@gmail.com",
  null,
  new Date().toLocaleDateString(),
  1
);

console.log(Jakub);
Jakub.changeName("Symeon");
console.log(Jakub);
