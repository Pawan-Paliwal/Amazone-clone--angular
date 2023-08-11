import { Injectable } from "@angular/core";
import { womens } from "./shared/womens.model";
import { Beauty } from "./shared/Beauty.nodel";
import { Mens } from "./shared/mens.model";

@Injectable({providedIn:"root"})
export class commonservice{
   private  women:womens;
    private beauty:Beauty;
   private  mens:Mens


     GetAll(){
        return this.beauty.slice();
     }
}