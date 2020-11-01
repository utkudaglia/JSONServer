export class PostsModel {
  public id = 0;
  public title = '';
  public post = '';
  public author = '';

  public constructor(data: any = null) {
    Object.keys(data || {})
      .filter(property => this.hasOwnProperty(property))
      .forEach(property => (this[property] = data[property]));
  }
}
