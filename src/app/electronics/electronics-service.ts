import { Injectable } from '@angular/core';
import { electronics } from '../shared/electronics.model';

@Injectable({ providedIn: 'root' })
export class electronicsService {
  private electronics: electronics[] = [
    new electronics(
      'https://m.media-amazon.com/images/I/71uriZ+FIhL._SX466_.jpg',
      'Robotbanao Electronic Components Kit-DIY Projects-Small Prototyping Projects-For Science Projects-For Educational Purposes-For Learning-58 Components',
      'Robotbanao',
      '‎RB-9109',
      'Science',
      2088,
      '‎15 x 10 x 8 cm; 200 Grams',
      '	‎radio-controlled, timer, light, Lap-timer',
      'Robotbanao, Indore, Madhya Pradesh',
      '	#259 in Industrial & Scientific',
      '	‎200 g',
      '3.9 out of 5 stars',
      '12 March 2020',
      '1 Count',
      'Robotbanao Electronic Components Project Kit Or Breadboard, hookup wire, battery, Assorted transistor, Assorted Capacitors, Assorted Resistors & Mis components',
      12322,25
    ),
    new electronics(
      'https://m.media-amazon.com/images/I/41zr73E-+9L._SY300_SX300_.jpg',
      'boAt Airdopes 141 Bluetooth Truly Wireless in Ear Headphones with 42H Playtime,Low Latency Mode for Gaming, ENx Tech, IWP, IPX4 Water Resistance, Smooth Touch Controls(Cyan Cider)',
      'boAt',
      '	Airdopes 141',
      'personal',
      52789,
      '50 x 50 x 20 Millimeters',
      '‎Sweatproof, Microphone Included',
      '‎Imagine Marketing Ltd, info@imaginemarketingindia.com',
      '#22 in Electronics',
      '‎60 g',
      '3.9 out of 5 stars',
      '6 December 2021',
      '1 Piece',
      'Airdopes 141',
      13555,50
    ),
    new electronics(
      'https://m.media-amazon.com/images/I/71Pe4kWY60L._SX466_.jpg',
      'Electronicspices 230V Heavy-Duty 60 Watts Soldering Iron With PVC WIRE And Copper Tip',
      'Electronic Spices',
      '	‎OWNIRONCO',
      'Industrial Use',
      657,
      '15 x 10 x 8 cm; 200 Grams',
      '‎Heavy Duty',
      'Electronic Spices',
      '#94 in Industrial & Scientific',
      '	‎210 Grams',
      '3.9 out of 5 stars',
      '17 September 2020',
      '	‎1',
      '	60 Watts Soldering Iron',
      1566,55
    ),
    new electronics(
      'https://m.media-amazon.com/images/I/31uE5cyGgiL._SY300_SX300_QL70_FMwebp_.jpg',
      'TVS ELECTRONICS Platina Wireless Mechanical Combo (Keyboard, Mouse) Strong Tilt Legs, Laser-Etched Key CapsLED Indicators Mouse Advanced Optical Tracking, Optical Tracking @ 1600 DPI, Built-in dongle',
      'TVS ELECTRONICS',
      '‎Platina-Combo',
      'Wireless',
      365,
      '	‎12 x 7.4 x 4 cm; 1.48 Kilograms',
      'Laser Projection,Wireless,Ergonomic,Volume Roller',
      '	‎TVS ELECTRONICS, ‎TVS ELECTRONICS LIMITED , TUMAKURU , KARNATAKA, TVS ELECTRONICS LTD , CUSTOMER CARE NO:0816-2214600,0816-3500400',
      '	#2,947 in Computers & Accessories',
      '	‎1 kg 480 g',
      '3.7 out of 5 stars',
      '	30 June 2021',
      '1 Count',
      'KEYBOARD & MOUSE',
      999,60
    ),
    new electronics(
      'https://m.media-amazon.com/images/I/41cL4VNtGdL._SX300_SY300_QL70_FMwebp_.jpg',
      'Generic Intel Core i9 Gaming PC Windows 10 Pro (Core i9 Processor, 32GB Ram, 240GB SSD, 4TB Hard Drive, 4GB Graphic Card, WiFi) Black',
      'Generic',
      'Gaming PC',
      'Black',
      4,
      '‎42 x 38 x 19 cm; 2.8 Kilograms',
      'Gaming',
      '	‎Generic',
      '#47,989 in Computers & Accessories',
      '‎2 kg 800 g',
      '5.0 out of 5 stars',
      '4 February 2021',
      '1 count',
      'Intel Core i9 Gaming PC',
      37000,20
    ),
    new electronics(
      'https://m.media-amazon.com/images/I/81xHjVQPwAL._SX569_.jpg',
      'Acer EK220Q 21.5 Inch (54.61 cm) Full HD (1920x1080) Pixels VA Panel LCD Monitor with LED Back Light I 1 MS VRB, 100Hz Refresh I 250 Nits I HDMI & VGA Ports with HDMI Cable I Eye Care Features (Black)',
      'Acer',
      '‎UM.WE0SI.301',
      'monitor',
      1063,
      '	‎37.9 x 50.29 x 18.11 cm; 2.8 Kilograms',
      'Blue Light Filter, 100Hz Refresh Rate, Frameless, Tilt Adjustment, Flicker-Free',
      '‎Acer, Acer Incorporated, 8F, No. 88 Sec. 1, Xintai 5th road, Xizhi, New Teipei City, TW 221',
      '#175 in Computers & Accessories',
      '‎2 kg 800 g',
      '4.2 out of 5 stars',
      '7 March 2023',
      '1 Piece',
      'Monitor',
      34000,30
    ),
    new electronics(
      'https://m.media-amazon.com/images/I/41LaV6pzPsL._SX300_SY300_QL70_FMwebp_.jpg',
      'Echo Dot (4th Gen, Black) Combo with Wipro 12W LED Smart Color Bulb',
      'alexa',
      'alexa213.322',
      'exho dot',
      34,
      '	3.9”W x 3.3”D x 3.6”H',
      'The Alexa app and Alexa-enabled products include several features for customers with accessibility needs related to vision, hearing, mobility, and speech. Learn more about Alexa accessibility.',
      'HENGYANG FUTAIHONG PRECISION INDUSTRIAL COLT Building E1 of No.35, Baisha Industrial Avenue, Baishazhou Industrial Park, Yanfeng District 421007 Hengyang City, Hunan Province, P. R. China',
      '57,618 global ratings',
      '341.3 g (Actual size and weight may vary by manufacturing process',
      '4.4 out of 5',
      ' 23 July 2023',
      '1 piece',
      'Smart speakers',
      65700,25
    ),
    new electronics(
      'https://m.media-amazon.com/images/I/41lpiu-GMXL._SY445_SX342_QL70_FMwebp_.jpg',
      'Apple 2022 MacBook Air Laptop with M2 chip: 34.46 cm (13.6-inch) Liquid Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera. Works with iPhone/iPad; Starlight',
      'Apple',
      'MacBook Air',
      'Starlight',
      1188,
      'The 34.46-centimetre (13.6-inch)',
      'Portable, Backlit Keyboard, Thin',
      'Apple',
      '48 global ratings',
      '1 kg 240 g',
      '4.5 out of 5',
      'July 2022',
      '1 peice',
      'MacBook Air',
      33242,75
    ),
  ];

  GetAll() {
    return this.electronics.slice();
  }

  Getid(index: number) {
    return this.electronics[index];
  }
}
