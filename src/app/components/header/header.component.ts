import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  constructor(){}

  public loginTab: boolean = true;

  ngOnInit(): void {
    if(localStorage.getItem('email')){
      this.loginTab = false;
    }
  }

  logout(){
    localStorage.removeItem('email');
    window.location.href = window.location.href
  }

}
