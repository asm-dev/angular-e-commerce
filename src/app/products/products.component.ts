import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductService
  ) {}

  ngOnInit(): void {
    const category = this.route.snapshot.paramMap.get('name')!;
    this.service
      .getProductsByCategory(category)
      .subscribe((data) => (this.products = data));
  }

  viewProduct(id: number): void {
    this.router.navigate(['/product', id]);
  }
}
