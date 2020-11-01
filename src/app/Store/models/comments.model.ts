export class CommentsModel {
  public id = 0;
  public body = '';
  public postId = 0;
  public author = '';

  public constructor(data: any = null) {
    Object.keys(data || {})
      .filter(property => this.hasOwnProperty(property))
      .forEach(property => (this[property] = data[property]));
  }
}
