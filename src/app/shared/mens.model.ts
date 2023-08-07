export class electronics {
    public img: string;
    public name: string;
    public Brand: string;
    public Model: string;
    public importer: string;
    public rating: number;
    public Product_Dimensions: string;
    public Special_features: string;
    public Manufacturer: string;
    public Sellers_Rank: string;
    public Item_Weight: string;
    public Customer_Reviews: string;
    public Date_First_Available: string;
    public Net_Quantity: string;
    public Generic_Name: string;
    constructor(
      img: string,
      name: string,
      Brand: string,
      Model: string,
      importer: string,
      rating: number,
      Product_Dimensions: string,
      Special_features: string,
      Manufacturer: string,
      Sellers_Rank: string,
      Item_Weight: string,
      Customer_Reviews: string,
      Date_First_Available: string,
      Net_Quantity: string,
      Generic_Name: string
  
    ) {
      this.img = img;
      this.name = name;
      this.Brand = Brand;
      this.Model = Model;
      this.importer = importer;
      this.rating = rating;
      this.Product_Dimensions = Product_Dimensions;
      this.Special_features = Special_features;
      this.Manufacturer = Manufacturer;
      this.Sellers_Rank = Sellers_Rank;
      this.Item_Weight = Item_Weight;
      this.Customer_Reviews = Customer_Reviews;
      this.Date_First_Available = Date_First_Available;
      this.Net_Quantity = Net_Quantity;
      this.Generic_Name = Generic_Name;
  
    }
  }
  