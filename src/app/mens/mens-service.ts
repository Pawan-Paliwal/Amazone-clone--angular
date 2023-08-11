import { Injectable } from "@angular/core";
import { Mens } from "../shared/mens.model";

@Injectable({providedIn:"root"})
export class MensService{
private Mens:Mens[]=[
new Mens('https://m.media-amazon.com/images/I/812mdk3Y6TL._UY500_.jpg','Fastrack Analog Mens Watch','Fastrack','NR38022PP03','Fastrack',2074,' ‎ 8.8 x 8.2 x 8.2 cm; 150 Grams','Water Resistant','Titan','#52 in Watches ','150 g','4.3 out of 5','12 January 2016','1count','watch',1200),
new Mens('https://m.media-amazon.com/images/I/41to+O4bKmL._SY300_SX300_.jpg','The Man Company Body Spray Combo Pack For Men, Active, Legend, Intense & Bold, Long-Lasting Fragrance, Everyday Use Deo, 150ml','	The Man Company','B09RV5XNH3','Nivea',4238,'‎ 20.9 x 16.6 x 5.5 cm; 760 Grams','Not Tested On Animals, Natural Ingredients','Nivea','#37 in Beauty','760 g','4 out of 5',' ‎ 5 February 2022','150.0 millilitre','Perfume',455),
new Mens('https://m.media-amazon.com/images/I/61+THk53YIL._UX679_.jpg','Fastrack Mens 100% UV protected Black Lens Square Sunglasses','Fastrack','P357BK1',' Titan - Titan Company Ltd. CWH, Eyewear Division Plot no 24 & 24A, KIADB Industrial area Chikkaballapur karnataka, India - 562101',17099,'14 x 6 x 5 cm; 150 Gram','Water Resistant','Fastrack','#185 in Clothing & Accessories','150 g','4.0 out od 5','12 April 2017','1 count','Sunglasses',1299),
new Mens('https://m.media-amazon.com/images/I/81S8yY8awyL._UX679_.jpg','Knotyy Winter Cap for Men - Blue','Unknown','‎ KNTY-CAP-BLU-B12','Unknown',908,'36 x 20 x 2 cm; 100 Grams','Unknown',' ‎ DPG Marketing Pvt. Ltd','#83,135 in Clothing & Accessories','100 g','3.9 out of 5','8 December 2017','1 count','Cap',250),
new Mens('https://m.media-amazon.com/images/I/41qhNyHHzyL.jpg','hangup Mens Notch Lapel Regular Fit Blazer','hangup',' ‎ ranveerCoat_42',' ‎ bgn apparels,676 phase 2 sector-37 gurgaon 122002,9953353985',37,' ‎ 25 x 35 x 3 Centimeters','Unknown','bgn apparels, bgn apparels,676 phase 2 sector-37 gurgaon 122002,9953353985',': #28,475 in Clothing & Accessories ','300 g','30. ot of 5',' 19 February 2019',' 1 blazer','Blazer',5000),
new Mens('https://m.media-amazon.com/images/I/41PbWoV3v8L.jpg','Maya Traders Mens Half Sleeve Solid Slim Fit Polo T-Shirt [Combo Pack of 3 ]','Unknown','‎ B0BWWTHYSW',' ‎ RI-blue-red-blk-t shirt',1,'--','--',' RI-blue-red-blk-t shirt-l','#154,418 in Clothing & Accessories','--','5 out of 5',' ‎ 26 February 2023','1 count','t shirt',150),
new Mens('https://m.media-amazon.com/images/I/61oR4MEXmTL._UY741_.jpg','LookMark Mens Poly Cotton Digital Printed Half Sleeve Shirt','--',' PRINTED SHIRT BETA-XL','LookMark',1181,'37 x 27 x 10 cm; 300 Grams','100% Premium Poly Cottton, Pre Washed for an extremely soft finish and Rich look','LookMark','#1,591 in Clothing & Accessories','300 g','3.4 out of 5','10 August 2021','1.00 count','Casual Shirts',1220),
new Mens('https://m.media-amazon.com/images/I/81EASQlMkSS._UY500_.jpg','Bagneeds Mens Black Synthetic Leather Briefcase Best Laptop Messenger Bag Satchel for Men','--','B0855F8174','Bagneeds',4547,'41.4 x 6.35 x 30.48 cm; 850 Grams','--','Bagneeds','#910 in Computers & Accessories','850 g','401 out of 5','25 February 2020','1','‎ Messenger Bag',1345)
]

GetAll(){
   return this.Mens.slice();
}

Getid(index: number){
    return this.Mens[index];
  }
   
}