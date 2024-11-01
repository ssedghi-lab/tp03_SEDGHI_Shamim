import { Component } from '@angular/core';
import { MonserviceService } from '../../monservice.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent {
  constructor(private monserviceService: MonserviceService) { }

  updateProduits(input: string) {
    this.monserviceService.filterProduits(input);
  }
}
