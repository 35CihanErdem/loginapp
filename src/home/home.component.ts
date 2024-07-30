import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from '../logout/logout/logout.component';

import { AuthdataService } from '../auth/authdata.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BtnComponent } from "../forms/btn/btn.component";  
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LogoutComponent, BtnComponent,CommonModule,HttpClientModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  data: any[] = [];
  newComment: any;
  

  constructor(private authService: AuthService ,private authdataService:AuthdataService,private http: HttpClient) {}

  onLogout() {
    this.authService.logout();  
  }

  ngOnInit(): void {
    this.http.get<any[]>('assets/veriler.json').subscribe(response => {
      this.data = response;
    });
  }

  addComment(post: {
      yorumlar: {
        ppfoto: string; // Bu sizin kullanıcı fotoğrafınız olabilir
        kisi: string; // Bu sizin kullanıcı adınız olabilir
        yorum_tarih: string; yorum: any;
      }[];
    }) {
    if (this.newComment.trim()) {
      post.yorumlar.push({
        ppfoto: 'assets/kisi4.jpg', // Bu sizin kullanıcı fotoğrafınız olabilir
        kisi: 'Siz', // Bu sizin kullanıcı adınız olabilir
        yorum_tarih: new Date().toLocaleDateString(),
        yorum: this.newComment
      });
      this.newComment = '';
    }
  }

  likePost(post: { liked: boolean; begeni: number; }) {
    if (!post.liked) {
      post.begeni += 1;
      post.liked = true;
    }
  }
  showLogoutMenu = false;

  toggleLogoutMenu() {
    this.showLogoutMenu = !this.showLogoutMenu;
  }
  
}
