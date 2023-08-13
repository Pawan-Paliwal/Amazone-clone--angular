import { of } from "rxjs";

export class Phone {
  public img: string;
  public name: string;
  public Brand: string;
  public Model: string;
  public Operating: string;
  public Technology: string;
  public rating: number;
  public Ram: string;
  public Product_Dimensions: string;
  public Batteries: string;
  public Special_features: string;
  public Whats_in_the_box: string;
  public Manufacturer: string;
  public Sellers_Rank: string;
  public Item_Weight: string;
  public Customer_Reviews: string;
  public Date_First_Available: string;
  public Item_Dimensions: string;
  public Net_Quantity: string;
  public Generic_Name: string;
  public Device_interface :string;
  public Resolution:string;
  public Battery_Power_Rating :string;
  public price:number;
  public off:number;
  constructor(
    img: string,
    name: string,
    Brand: string,
    Model: string,
    Operating: string,
    Technology: string,
    rating: number,
    Ram: string,
    Product_Dimensions: string,
    Batteries: string,
    Special_features: string,
    Whats_in_the_box: string,
    Manufacturer: string,
    Sellers_Rank: string,
    Item_Weight: string,
    Customer_Reviews: string,
    Date_First_Available: string,
    Item_Dimensions: string,
    Net_Quantity: string,
    Generic_Name: string,
    Device_interface :string,
    Resolution:string,
    Battery_Power_Rating:string,
    price:number,
    off:number

  ) {
    this.img = img;
    this.name = name;
    this.Brand = Brand;
    this.Model = Model;
    this.Operating = Operating;
    this.Technology = Technology;
    this.rating = rating;
    this.Ram = Ram;
    this.Product_Dimensions = Product_Dimensions;
    this.Batteries = Batteries;
    this.Special_features = Special_features;
    this.Whats_in_the_box = Whats_in_the_box;
    this.Manufacturer = Manufacturer;
    this.Sellers_Rank = Sellers_Rank;
    this.Item_Weight = Item_Weight;
    this.Customer_Reviews = Customer_Reviews;
    this.Date_First_Available = Date_First_Available;
    this.Item_Dimensions = Item_Dimensions;
    this.Net_Quantity = Net_Quantity;
    this.Generic_Name = Generic_Name;
    this.Device_interface=Device_interface;
    this.Resolution=Resolution;
    this.Battery_Power_Rating=Battery_Power_Rating;
    this.price=price
this.off=off
  }
}
