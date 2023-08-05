export class Phone {
    public img:string;
  public name: string;
  public Brand: string;
  public Model: string;
  public Operating: string;
  public Technology: string;
  public rating:number;
  constructor(
    img:string,
    name: string,
    Brand: string,
    Model: string,
    Operating: string,
    Technology: string,
    rating:number
  
  ) {
    this.img=img;
    this.name = name;
    this.Brand = Brand;
    this.Model = Model;
    this.Operating = Operating;
    this.Technology = Technology;
this.rating=rating
  }
}
