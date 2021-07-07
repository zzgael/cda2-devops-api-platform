export class Book {
  public "@id"?: string;

  constructor(
    _id?: string,
    public name?: string,
    public author?: string,
    public datePublished?: Date
  ) {
    this["@id"] = _id;
  }
}
