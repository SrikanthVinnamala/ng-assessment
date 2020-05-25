import { Topping } from './topping.model';
import { Driver } from './driver.model';

export class Order {
    id: number;
    customerName: string;
    toppings: Topping[];
    state: number;
    size: number;
    toppingNames: string;
    driverName:string;
}