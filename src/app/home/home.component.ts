import { Component, OnInit } from '@angular/core';
import { BarbieService } from '../services/barbie.service';
import { Barbie } from 'src/models/barbie.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  barbies: Barbie[] = [];

  constructor(private barbieService: BarbieService) { }

  ngOnInit(): void {
    this.barbieService.getBarbies().subscribe((data: Barbie[]) => {
      this.barbies = data;
      console.log('Barbies:', this.barbies); // Vérifiez les données reçues dans la console
    });
  }
}
