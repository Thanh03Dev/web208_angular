import { ProductService } from 'src/app/services/product.service';
import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
//   title = "Quan ly san pham";
//   status: boolean = false;
//   valueInput: string = "";
//   product: IProduct[] = [
//     {_id: 1, name: "san pham A", price: 1000, img: "https://picsum.photos/200/200"},
//     {_id: 2, name: "san pham B", price: 2000, img: "https://picsum.photos/200/200"},
//   ];

products: IProduct[] = [];

constructor(private productService: ProductService){
    this.productService.getProducts().subscribe(data=>{
        this.products = data
    }, error=>{
        console.log(error.message);
    })
}

  toggle() {
    // this.status = !this.status;
  }
  setValue(e: any) {
    // this.valueInput = e.target.value;
  }
  removeItem(id:any){
    // this.product = this.product.filter((item) => item._id !== id)
    this.productService.deleteProduct(id).subscribe(()=>{
        console.log("delete ok")
    })
  }

}
