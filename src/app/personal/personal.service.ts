import { Injectable } from "@angular/core";
import { Personal } from "../shared/personal.model";

@Injectable({providedIn:"root"})
export class PersonalService{
private Personal:Personal[]=[
    new Personal('https://m.media-amazon.com/images/I/51BgScyg2qL._SX425_.jpg','Angular Holder Pigeon Shears Kitchen Knifes 6 Piece Set with Wooden Block (Stainless Steel)','Pigeon','Plastic','	Stainless Steel','Silver','Stovekraft Limited, 180042566666','‎13 Centimetres','Stovekraft limited','	#156 in Home & Kitchen ','307 g','6','Kitchen Knife Set','3.5 out of 5',1200),
    new Personal('https://m.media-amazon.com/images/I/513NMqLjTxL._SX425_.jpg','Pigeon by Stovekraft Large Handy and Compact Chopper with 3 blades for effortlessly chopping vegetables and fruits for your kitchen, Green','Pigeon','Plastic','Plastic','Green','Stovekraft Limited, 81/1, Harohalli Industrial Area, Kanakapura Taluk, Ramanagara, Bangalore, Karnataka 562112, India. Toll free no: 180042566666','‎10L x 10W x 12.8H Centimeters','Stovekraft Limited, Stovekraft Limited, 81/1, Harohalli Industrial Area, Kanakapura Taluk, Ramanagara, Bangalore, Karnataka 562112, India. Toll free no: 180042566666','	#6 in Home & Kitchen','	333 g','1 count','Large Handy Chopper 650ml','3 out of 5',1000),
    new Personal('https://m.media-amazon.com/images/I/51id9Ea2sdL._SX569_.jpg','Lizol 450ml, Kitchen Cleaner Spray | Suitable for all Kitchen Surfaces, Gas Stove, Countertop, Tiles, Chimney and Sink | Kills 99.9% germs','Lizol','spray','liquid','green','Reckitt Benckiser India Pvt. Ltd. | B96 Eldeco SIDCUL Industial Park, Sitarganj, Uttarakhand 262405 | 1800 102 7245','	‎1 x 15.2 x 26.5 cm; 450 Grams','Reckitt Benckiser, B96 Eldeco SIDCUL Industial Park, Sitarganj, Uttarakhand 262405;1800 102 7245 ;Consumercare_In@reckitt','	#276 in Health & Personal Care','1 count','450.0 millilitre','	Kitchen Cleaner','5 out of 5',1233),
     new Personal('https://m.media-amazon.com/images/I/61Kr1DqwU+L._SY300_SX300_.jpg','TENFIRE Square Shape Container Pack of 6 Kitchen Storage Container Set plastic Storage Jar, Jar for Kitchen Storage Dabba, Box for Kitchen 500ml, Airtight Container (Black) (6)','TENFIRE','plastic','	Dishwasher Safe','	500ml Pack of 6','Tenfire','‎31.7 x 18.9 x 11.1 cm; 740 Grams','Tenfire, Tenfire','#4,877 in Home & Kitchen','740 g','6.00 Piece','	500ml Containers','4.6 out of 5',1243),
      new Personal('https://m.media-amazon.com/images/I/41qTY7SR28L._SX300_SY300_QL70_FMwebp_.jpg','D.k 11 Plate ( lid ) Stand Made of Steel Less Steel. Dish Rack Lid Holder for Kitchen for Kitchen Cabinet & Dining Table.','D.k 11','	Stainless Steel','Countertop Mount','silver','	D.k 11','2 x 11.2 x 30.5 cm','D.k 11','#1,181 in Home & Kitchen ','400 g','1 count','Plate','4.0 out of 5',1400),
      new Personal('https://m.media-amazon.com/images/I/61GgOnh8e6L._SX425_.jpg','Morphy Richards Melange 800W Stand Mixer | Multi purpose functioning - Mixing, Beating, Kneading, Whisking| 8-Speed Level|Attachments-Dough Hook, Whisk, Mixing beater|2-Yr Warranty by Brand| Navy Blue','	Morphy Richards','Hard','plastic ,metal','Navy Blue','	Imported & Marketed by Bajaj Electricals Limited, 701, Rustomjee Aspiree, Bhanu Shankar Yagnik marg, Off Eastern Express Highway, Sion, Mumbai - 400022, Maharashtra, Tel.: 022-41280000, Email - consumercare@morphyrichardsindia.com','‎24D x 38W x 33.5H Centimeters','	Morphy Richards, Imported & Marketed by Bajaj Electricals Limited, Imported & Marketed by Bajaj Electricals Limited, 701, Rustomjee Aspiree, Bhanu Shankar Yagnik marg, Off Eastern Express Highway, Sion, Mumbai - 400022, Maharashtra, Tel.: 022-41280000, Email - consumercare@morphyrichardsindia.com','#55,961 in Home & Kitchen ','4 kg 750 g','	1 Count','Stand Mixer','4.5 out of 5',199),
       new Personal('https://m.media-amazon.com/images/I/41lBFYYo1bL._SY300_SX300_QL70_FMwebp_.jpg','AmazonBasics Premium 750-Watt Mixer Grinder with 3 Jars,White and Blue','	amazon basics','hard','plastic','White and Blue','EXPO SALES (INDIA) PVT. LTD., EXPO SALES (INDIA) PVT. LTD. Khasra no 7/2, Village Buranwala, Po- Barotiwala, Teh. Baddi, Distt.SolanHimachal Pradesh,For warranty, contact - Tollfree : 1800-419-0416 or Email id : amazonbrands@blubirch.com (Working hours: 10am to 6pm)','	‎26.5D x 37W x 21H Centimeters','EXPO SALES (INDIA) PVT. LTD.','#34,939 in Home & Kitchen','	4 kg 570 g','1','	750W Mixer Grinder, 4 Jars','3.9 out of 5',249),
        new Personal("https://m.media-amazon.com/images/I/315hSFYsKyL._SX300_SY300_QL70_FMwebp_.jpg",'Zureni Kitchen Platform & Glass Squeegee Wiper All-Purpose Cleaning Windows Car Windshield Bathroom Mirrors Table Cleaner (Set of 2, Random Colours)','Zureni','rubber','Floor,Glass','Random Colors','	Hindustan Broom Co','‎29 x 20 x 2 Centimeters','Zureni, Hindustan Broom Co.','#50 in Home Improvement ','50 g','1 Count','	squeegee wiper','4.2 out of 5',599)

]

GetAll(){
   return this.Personal.slice();
}

Getid(index: number){
    return this.Personal[index];
  }
   
}