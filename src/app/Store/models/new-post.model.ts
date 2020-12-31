export class Post{
  public id = 0;
  public title = '';
  public body = '';
  public user ='';
  public date = '';

  public constructor(data: any = null) {
    Object.keys(data || {})
      .filter(property => this.hasOwnProperty(property))
      .forEach(property => (this[property] = data[property]));
  }
}




/*export interface Post {
  id: number;
  title: string;
  body: string;
  user: string;
  created: Date;
}*/
