export class User {
  id: string;
  name: string;
  username: string;
  email: string;
  constructor(user: any) {
    this.id = user.id;
    this.name = user.name;
    this.username = user.username;
    this.email = user.email;
  }
}
