import { Injectable } from "@angular/core";
import { womens } from "../shared/womens.model";

@Injectable({providedIn:"root"})
export class womenService{
private womens:womens[]=[
    new womens('https://m.media-amazon.com/images/I/61oCLzTHSiL._UY575_.jpg','Shining Diva Fashion Set of 4 Multilayer Charm Bangle Gold Plated Bracelet for Women and Girls (Golden) (10695b)','	Shining Diva Fashion','Design07',' Shining Diva Fashion, Shining Diva, 18 SSI INDL. AREA, G.T. KARNAL ROAD, DELHI - 110033, 011-42139004',2494,'10.5 x 7 x 3 cm; 30 Grams','Suitable For Party wear or Daily Wear','Shining Diva Fashion','#97 in Jewellery','30 g','307 out of 5',' ‎ 28 February 2019',' 4 Count','Bracelets'),
    new womens('https://m.media-amazon.com/images/I/81yH4BZ9uPL._UY741_.jpg','KERI PERRY Womens Chiffon Western Dress(Sky Blue) Dress for Women, Dress','--','LABHU BAA EMPORIO, LABHU082','LABHU BAA EMPORIO, Labhu Baa Emporio, A-5/19 Udhna Udyog Nagar, Road No.8, Sahakari sangh ltd, sardar patel, Surat, Gujrat-394210, India',442,'22 x 16 x 3 cm; 250 Grams','Dress Style Type: Fit & Flare || Neck Type : Round Neck || Fit Type: Regular Fit','‎ LABHU BAA EMPORIO','#751 in Clothing & Accessories','‎ 250 g','308 out of 5','19 January 2023',' 1.00 count','Dress'),
    new womens('https://m.media-amazon.com/images/I/51N-f-Tl4cL._SX300_SY300_QL70_FMwebp_.jpg','Horlicks Womens Plus Chocolate Refill 400g| Health Drink for Women, No Added Sugar| Improves Bone Strength in 6 months, 100% Daily Calcium, Vitamin D','Horlicks','Horlicks B00TIMN47M','Hindustan Unilever Limited, Hindustan Unilever Ltd, Unilever House, B D Sawant Marg, Chakala Andheri East - 400099 TOLL FREE: 1800-10-22-221 PO BOX 14760, MUMBAI 400 099 LEVER.CARE@UNILEVER.COM',7587,'13.5 x 4.5 x 18.7 cm; 400 Grams','THE BONE NUTRITION SPECIALIST : Horlicks Womens Plus, a specialised health drink for women is formulated with the unique combination of Calcium,','Hindustan Unilever Limited','#474 in Health & Personal Care',' 400.0 gram','5 out of 5',' 12 February 2015','400.0 gram','Health & Nutrition Drink'),
    new womens('https://m.media-amazon.com/images/I/41F-W1-zs4L._SX300_SY300_QL70_FMwebp_.jpg',' Roll over image to zoom in Bella Vita Luxury Woman Eau De Parfum Gift Set 4x20 ML for Women with CEO, Honey Oud, Glam,Rose Perfume|Floral,Fruity Long Lasting EDP Fragrance Scent','Bella Vita Luxury',' spray ‎WPS-01',' IDAM NATURAL WELLNESS PRIVATE LIMITED, IDAM NATURAL WELLNESS PRIVATE LIMITED',8119,'1 x 2 x 1 cm; 80 Grams','This discovery set is perfect for women who want to indulge in luxury fragrances and explore different scents without committing to a full-size bottle.','	‎IDAM NATURAL WELLNESS PRIVATE LIMITED','#40 in Beauty','80 g','4.3 out of 5','‎ 8 April 2021',' 60 millilitre','Women Perfume Gift Set'),
     new womens('https://m.media-amazon.com/images/I/61xmb0cOh9L._UY575_.jpg','Shining Diva Fashion Latest pairs Earrings Combo Set Crystal Pearl Stud Earrings for Women','niveaa','Earrings Combo S  cmb291_10868_10869','Shining Diva, Shining Diva, 18 SSI INDL. AREA, G.T. KARNAL ROAD, DELHI - 110033, 011-42139004',5234,'‎ 9.5 x 9.5 x 5.5 cm; 50 Grams','Shining  and flexible',' Shining Diva','#47 in Jewellery ',' 50 Grams','3.9 out of 5','4 February 2020','48 count','Earrings'),
     new womens('https://m.media-amazon.com/images/I/71JAtYR3tLL._UY741_.jpg','Fabricorn Womens Fleece Collared Neck Sweatshirt','Fabricorn','Fabricorn SS03_Blk_Slv1WhtStripe_P',' ‎ Fabricorn, Fabricorn',3565,'29 x 25 x 2.5 cm; 160 Grams','Quality:Fleece Premium Quality; Bio washed to offer comfort and smoothness','Fabricorn',' #1,861 in Clothing & Accessorie','160 g','3.8 ouut of 5',' ‎ 12 December 2019','1 count','Sweatshirt'),
     new womens('https://m.media-amazon.com/images/I/41RYVXRy05L._SX300_SY300_QL70_FMwebp_.jpg','Pee Safe Natural Intimate Wash For Women| 100% Alcohol-Free | pH Balanced | Ayurvedic Daily Hygiene Wash | Lemongrass Fragrance | Paraben-Free | Sulfate-Free | 105ml','PEESAFE','PEESAFE 322-bkjfj-23','Redcliffe Hygiene Pvt Ltd Plot no. 456-457 Ground floor, Udyog Vihar Phase-iii Gurugram-122016, Haryana India',3888,'5 x 3 x 13.5 cm; 128 Grams','	Alco, Antibacterial, Paraben Free','Kenlife Care Private Limited',' #1,536 in Health & Personal Care',' 128 Gram','4.0 out of 5','22 April 2018','150 millilitre','‎ Intimate wash'),
      new womens('https://m.media-amazon.com/images/I/71+FCdcCGuL._UY695_.jpg','Vivinkaa Sling Bag for Women, Bags for Women, Sling Bag, Purse for Women, Sling Bag for Women Stylish, Sling Bag for Girls, Women Sling Bag, Bag for Girls - Indigo','Vivinkaa',' part-1','‎ Fashion Cottage Pvt Ltd, D/3, Sagar sangam, Kandivali w, Mumbai-67, # 9867680418',1984,'17.78 x 10.16 x 22.86 cm; 280 Grams','--','Vivinkaa','#1,212 in Shoes & Handbags',' 280 Gram','3.8 out of 5','2 December 2017',' 1.00 count','‎ Sling Bag'),
     

]

GetAll(){
   return this.womens.slice();
}

Getid(index: number){
    return this.womens[index];
  }
   
}