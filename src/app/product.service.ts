import { Injectable } from '@angular/core';
import { FilterPipe } from './pipes/filter.pipe';
import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  arrProducts=[
    new Product('101',"TV",45000),
    new Product('102',"Laptop",45000),
    new Product('103',"Mobile",45000),
    new Product('104',"Sports Watch",45000),
  ]

  getAllProducts()
  {
    return this.arrProducts;
  }

  getProductById(Id1:string)
  {
    return this.arrProducts.filter((p:any)=>p.pid.startsWith(Id1));
  }

  getAllProductsByName(name:string)
  {
    name.toUpperCase();
    return this.arrProducts.filter((p:any)=>p.pname.startsWith(name));
  }

  addProduct(){
    this.arrProducts.push({pid:'105',pname:'Sofa',cost:50000});
    return this.arrProducts;
  }

  deleteProduct(myp:Product)
  {
    this.arrProducts.splice(this.arrProducts.indexOf(myp),1);
    return this.arrProducts;
  }
}
