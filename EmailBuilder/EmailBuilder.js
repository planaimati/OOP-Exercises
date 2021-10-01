class EmailBuilder {
  constructor() {
    this.email = {
      from: "",
      to: "",
      title: "",
      cc: [],
      bcc: [],
      html: "",
    };
  }

  setFrom(from) {
    this.email.from = from;
    return this;
  }

  setTo(to) {
    this.email.to = to;
    return this;
  }

  setTitle(title) {
    this.email.title = title;
    return this;
  }

  setCc(cc) {
    this.email.cc.push(cc);
    return this;
  }

  setBcc(bcc) {
    this.email.bcc.push(bcc);
    return this;
  }

  setHtml(html) {
    this.email.html = html;
    return this;
  }

  build() {
    return this.email;
  }
}

let email = new EmailBuilder()
  .setFrom("Mateusz")
  .setTo("Marian")
  .setTitle("helo")
  .setCc("Mateusz", "Skarabeusz")
  .setBcc("Mateusz", "Skarabeusz")
  .setHtml("html")
  .build();

const buildEmail = () => {
  const entries = Object.entries(email);

  const result = [];

  for (item of entries) {
    if (!item[1] || item[1].length < 1) {
      result.push(false);
    } else result.push(true);
  }

  if (result.every((item) => item === true)) {
    return JSON.stringify(email);
  } else return "error";
};

buildEmail();
