import { Injectable } from "@angular/core";
import { Phone } from "../shared/phones.model";

@Injectable({providedIn:"root"})
export class phonesService{
private Phone:Phone[]=[
    new Phone('https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg','Apple iPhone 14 (128 GB) - Blue','Apple','iPhone','iOS','5G',12344),
    new Phone('https://m.media-amazon.com/images/I/51eGaaoQ1mL._SX300_SY300_QL70_FMwebp_.jpg','TECNO Camon 19 Neo (Dreamland Green, 6GB RAM, 128GB Storage)|48MP Super Night Rear Camera|32MP Selfie Camera, 2 GB RAM, Blue, Smartphone','Tecno','Camon 19 Neo','	HiOS 8.6 based on Android 12','4G,3G,2G',2212),
    new Phone('https://m.media-amazon.com/images/I/51PqaHZDiNL._SX679_.jpg','IKALL S1 Smartphone (6GB Ram + 6GB Virtual Ram, 128GB Internal Storage, Triple Camera) (Purple)','IKALL','S1','	Android 13.0','LTE',3511),
    new Phone('https://m.media-amazon.com/images/I/41dEcQR7UnL._SX300_SY300_QL70_FMwebp_.jpg','realme narzo N53 (Feather Gold, 6GB+128GB) 33W Segment Fastest Charging | Slimmest Phone in Segment | 90 Hz Smooth Display','realme','realme narzo N53','	Android 13.0','LTE',2111)
   
];

GetAll(){
   return this.Phone.slice();
}
}