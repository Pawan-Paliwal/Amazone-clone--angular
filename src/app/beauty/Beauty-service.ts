import { Injectable } from '@angular/core';
import { Beauty } from '../shared/Beauty.nodel';

@Injectable({ providedIn: 'root' })
export class BeautyService {
  private Beauty: Beauty[] = [
    new Beauty(
      'https://m.media-amazon.com/images/I/51TfLKO00IL._AC_UL320_.jpg',
      'Swiss Beauty Hydra Anti Wrinkle Eye Serum Patch| Treats Dark Circles, Fine Lines And Wrinkles | Enriched With Collagen And Aloe Vera Extract | Shade -Gold, 60 Pcs|',
      'SWISS BEAUTY',
      'Gel',
      'Brightening',
      '	Oily, Combination, Sensitive, Dry, Normal',
      'Jmd impex,15llnd floor new qutab road sadar bazar delhi-110006',
      '8.5 x 8.5 x 5 Centimeters',
      'Yiwu Retin-A Import and Export co., Ltd., room 601 unit 4 xianggangchehg 4 district choucheng yiwu zhejiang',
      '#386 in Beauty ',
      '60 g',
      '1.0 millilitre',
      'Eye Serum',
      '1,122',
      1200,
      25
    ),
    new Beauty(
      'https://m.media-amazon.com/images/I/51N8QYUci5L._SY450_.jpg',
      'Swiss Beauty Metallic Gloss Me Lip Gloss | Lightweight,Non Sticky and Hydrating Lip Gloss| White, 6Ml',
      '	SWISS BEAUTY',
      'Liquid',
      'Brightening,Hydrating,Longlasting,Radiant,Shine,Softness',
      'All',
      'JBJ Impex',
      '11 x 11 x 11 Centimeters',
      'JBJ Impex, Schwan Cosmetics Germany GmbH&Co. KG, Schwanweg I, Heroldsberg, Germany',
      '#204 in Beauty',
      '6 g',
      '1 count',
      'Gloss Me Sb-304',
      '12,333',
      500,
      30
    ),
    new Beauty(
      'https://m.media-amazon.com/images/I/51SufCj2KzL._SX300_SY300_QL70_FMwebp_.jpg',
      'MACPLUS Makeup Sponge Set Beauty Blender with Egg Case, Soft Sponge For Liquid Foundation, Creams, and Powders Latex Free Wet and Dry Makeup (Multicolor 4 Big + 3 Mini -7 Pcs set)',
      'MACPLUS',
      'spongue',
      'For soft skin ',
      'Normal',
      'IMPORTER - URBANMAC INDIA , NEW DELHI 110091 CONTACT-urabanmac@gmail.com',
      '40 x 30 x 10 Millimeters',
      'MACPLUS, IMPORTER - URBANMAC INDIA , NEW DELHI 110091 CONTACT-urabanmac@gmail.com',
      '#1,573 in Beaut',
      '80 g',
      '1 count',
      'SPOUNGE',
      '3,283',
      499,
      35
    ),
    new Beauty(
      'https://m.media-amazon.com/images/I/51wKPntT05L._SL1080_.jpg',
      'Maybelline New York Oli Control Powder, With SPF to Protect Skin from Sun, Absorbs Oil, Fit Me, 128 Warm Nude, 6g',
      'Maybelline',
      'Pressed',
      'Brightening',
      'All',
      '	Loreal Paris Pvt. Ltd.',
      '7.7 x 2 x 9.7 Centimeters',
      'LOréal India Pvt. Ltd., LOreal India Pvt Ltd., Chakan, Pune - 410501',
      '	#59 in Beauty',
      '32 g',
      '1 count',
      '	Fit Me Shade 128 Compact Powder, 8g - Powder That Protects Skin From Sun, Absorbs Oil, Sweat and Helps You To Stay Fresh For Upto 12hrs',
      '1,888',
      650,
      20
    ),
    new Beauty(
      'https://m.media-amazon.com/images/I/31fp0KCWn-L._SX300_SY300_QL70_FMwebp_.jpg',
      'Garnier Skin Naturals Bright Complete Vitamin C Face Wash, 150g - Vitamin C Face Wash For Brighter and Glowing Skin - Suitable For all Skin Types',
      'Garnier',
      'Cream',
      'Natural, Dermatologist Tested',
      'All',
      'Loreal India Pvt. Ltd. A-Wing, 8th Floor, Marathon Futurex, NM Joshi Marg, Lower Parel, Mumbai, Maharashtra 400013',
      '	50 x 78 x 159 Millimeter',
      'Garnier, Pritam International Pvt Ltd., K. No. 138, Raipur Industrial Area, Roorkee, Uttarakhand - 247667',
      '	#81 in Beauty',
      '	150 g',
      '1 count',
      'Skin Care',
      ' 4,615 ratings',
      1500,
      50
    ),
    new Beauty(
      'https://m.media-amazon.com/images/I/41oEQBp72YL._SX569_.jpg',
      'Mamaearth Rosemary Anti Hair Fall Shampoo with Rosemary & Methi Dana for Reducing Hair Loss & Breakage- 250 ml | Up to 94% Stronger Hair* | Up to 93% Less Hair Fall | For Men and Women',
      'Mamaearth',
      'Liquid',
      'GIVES UP TO 94% STRONGER HAIR*: Stronger hair in, hair fall out! Enriched with Rosemary, a powerhouse of nutrients',
      'All',
      'Indo Herbal Products',
      '50 x 50 x 205 Millimeters',
      '	Indo Herbal Products, (A) Indo Herbal Products, Unit-2, Plot No. 28-29, Sector 1B, IIE, SIDCUL, Ranipur, Haridwar, 249403 Regd. Address: - C-84 Panchsheel Enclave, New Delhi, India – 110017 M. : 20/C/U.A/2010 (B) Indo Herbal Products, Plot No 17, Sector 12, IIE, Sidcul, Haridwar Uttarakhand, India - 249403 M. : 2/C/U.A/2023',
      '#169 in Beauty',
      '290 g',
      '250.0 millilitre',
      'Skin Care',
      ' 334 ratings',
      1800,
      40
    ),
    new Beauty(
      'https://m.media-amazon.com/images/I/41B84Gs7jjL._SX300_SY300_QL70_FMwebp_.jpg',
      'BoldHealth Eye Mask with Cooling Gel for Dark Circles, Dry Eyes, Cooling Eyes, Pain Relief, Redness, Eye Patches Eye Cooling Gel Pad Stretchable for Eye Relaxing for Women and Men Eye Mask Gel-(Blue)',
      'BoldHealth',
      'soft',
      'COLD COMPRESS THERAPY',
      'Adult',
      'Bling Brands Pvt Ltd, NO. 1433/A, JAYANAGAR, Bangalore, 560041,support@blingbrands.in,08043702806',
      '	23 x 9 x 3 Centimeter',
      'BoldHealth, Bling Brands Pvt Ltd, NO. 1433/A, JAYANAGAR, Bangalore, 560041,support@blingbrands.in,08043702806',
      '#210 in Beauty',
      '90 g',
      '1 count',
      '	GelEyeMaskBlue',
      ' 1,906 ratings',
      1770,
      35
    ),
    new Beauty(
      'https://m.media-amazon.com/images/I/41Iun3M0eLL._SX300_SY300_QL70_FMwebp_.jpg',
      'Mamaearth Soft Matte Long Stay Lipsticks with Jojoba Oil & Vitamin E for 12 Hour Long Stay - 04 Berry Nude - 3.5',
      'Mamaearth',
      'Stick',
      '	Makeup,Moisturizing,Nourishing,Smoothening,Softening',
      'All',
      'Cosmetics Pvt Ltd, Plot No - 9 , Sector 5 , IIE SIDCUL , Haridwar , Uttarakhand 249403 M.L. No: 10/C/UA/2021',
      '9 x 3 x 3 Centimeters',
      '‎Regi India Cosmetics Pvt Ltd',
      '#78 in Beauty',
      '	3.5 g',
      '3.5 gram',
      'Soft Matte',
      ' 923 ratings',
      999,75
    ),
  ];

  GetAll() {
    return this.Beauty.slice();
  }

  Getid(index: number) {
    return this.Beauty[index];
  }
  Serchresult(searchTerm: string) {
    return this.GetAll().filter((Beauty) =>
      Beauty.Brand.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
