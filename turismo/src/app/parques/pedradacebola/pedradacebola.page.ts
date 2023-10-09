import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-pedradacebola',
  templateUrl: './pedradacebola.page.html',
  styleUrls: ['./pedradacebola.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PedradacebolaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}