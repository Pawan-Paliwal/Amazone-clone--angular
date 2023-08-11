import { CartItem } from "./cart-item";

export class Cart{
    item:CartItem[]=[];
    totalPrice:number=0;
    totalCount:number=0;
}