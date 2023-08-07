export class Beauty {
  public img: string;
  public name: string;
  public Brand: string;
  public Item_form: string;
  public Product_Benefits: string;
  public Skin_Type: string;
  public Importer: string;
  public Product_Dimensions: string;
  public Manufacturer: string;
  public Sellers_Rank: string;
  public Item_Weight: string;
  public Net_Quantity: string;
  public Generic_Name: string;
  public rating:any;
  constructor(
    img: string,
    name: string,
    Brand: string,
    Item_form: string,
    Product_Benefits: string,
    Skin_Type: string,
    Importer: string,

    Product_Dimensions: string,

    Manufacturer: string,
    Sellers_Rank: string,
    Item_Weight: string,

    Net_Quantity: string,
    Generic_Name: string,
    rating:any
  ) {
    this.img = img;
    this.name = name;
    this.Brand = Brand;
    this.Item_form = Item_form;
    this.Product_Benefits = Product_Benefits;
    this.Skin_Type = Skin_Type;
    this.Importer = Importer;

    this.Product_Dimensions = Product_Dimensions;

    this.Manufacturer = Manufacturer;
    this.Sellers_Rank = Sellers_Rank;
    this.Item_Weight = Item_Weight;
    this.Net_Quantity = Net_Quantity;
    this.Generic_Name = Generic_Name;
    this.rating=rating;
  }
}
