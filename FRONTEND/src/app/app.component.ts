import { Component } from '@angular/core';
import{ProductListComponent} from './liste/product-list/product-list.component'
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent , HeaderComponent ,FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TP03';
}
