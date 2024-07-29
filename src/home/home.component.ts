import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from '../logout/logout/logout.component';

import { AuthdataService } from '../auth/authdata.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BtnComponent } from "../forms/btn/btn.component";  



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LogoutComponent, BtnComponent,CommonModule,HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  data: any[] = [];
  

  constructor(private authService: AuthService ,private authdataService:AuthdataService,private http: HttpClient) {}

  onLogout() {
    this.authService.logout();  
  }

  ngOnInit(): void {
    this.http.get<any[]>('assets/veriler.json').subscribe(response => {
      this.data = response;
    });
  }

  
}
