import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';
import {MatSidenavModule} from '@angular/material/sidenav';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,FooterComponent,CommonModule,MatSidenavModule,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'DeliverySite';
  isloggview!:any;

  constructor(private router:Router) {
  }

  ngOnInit(): void {
  }

  isLoggedView()
  {
   this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: any) => {
    this.isloggview = (event.url == '/login')  
    })
    return this.isloggview;
  }


}
