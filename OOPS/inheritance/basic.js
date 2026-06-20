class User {
  constructor(name, mail) {
    this.name = name;
    this.mail = mail;
  }

  login() {
    console.log(`${this.name} logged in.`);
  }
}

class Admin extends User {
  constructor(name, mail, role) {
    super(name, mail);
    this.role = role;
  }
  delete(user) {
    console.log(`User ${this.name} deleted ${user.name}`);
  }
}

let admin = new Admin("Amit", "amit@gmail.com");
admin.login();
admin.delete({ name: "Ben" });