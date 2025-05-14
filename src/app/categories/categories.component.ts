import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CapitalizePipe } from '../pipes/capitalize.pipe';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, RouterModule, CapitalizePipe],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories: string[] = [];

  constructor(private service: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.service.getCategories().subscribe((data) => (this.categories = data));
  }

  goToCategory(name: string): void {
    this.router.navigate(['/category', name]);
  }
}
