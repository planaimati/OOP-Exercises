import Contact from "./Contact.js";
import Group from "./Group.js";
import AddressBook from "./AddressBook.js";
import UUID from "./UUID.js";

const uuid = new UUID();

//create example contact
const jakub = new Contact(
  "Jakub",
  "Jakubik",
  "jakub@gmail.com",
  null,
  new Date().toLocaleDateString(),
  uuid.generateID()
);

const kamil = new Contact(
  "Kamil",
  "Kamilek",
  "kamil@gmail.com",
  null,
  new Date().toLocaleDateString(),
  uuid.generateID()
);

const krystyna = new Contact(
  "Krystyna",
  "Krystynka",
  "krystyna@gmail.com",
  null,
  new Date().toLocaleDateString(),
  uuid.generateID()
);
const katarzyna = new Contact(
  "Katarzyna",
  "Kasia",
  "katarzyna@gmail.com",
  null,
  new Date().toLocaleDateString(),
  uuid.generateID()
);

//create example groups

const maleGroup = new Group("Male Group", [jakub, kamil], uuid.generateID());

const femaleGroup = new Group(
  "Female Group",
  [krystyna, katarzyna],
  uuid.generateID()
);

//create example adress book

const addressBook = new AddressBook(
  [jakub, kamil, krystyna, katarzyna],
  [maleGroup, femaleGroup]
);


