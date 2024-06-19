import { Component, OnInit } from '@angular/core';
import { BarbieService } from 'src/app/services/barbie.service';
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
    this.loadBarbies();
  }

  loadBarbies(): void {
    this.barbieService.getBarbies().subscribe((data: Barbie[]) => {
      this.barbies = data;
    });
  }

  deleteBarbie(barbie: Barbie): void {
    if (confirm(`Êtes-vous sûr de vouloir supprimer ${barbie.firstName} ${barbie.lastName} ?`)) {
      this.barbieService.deleteBarbie(barbie.barbieId).subscribe(() => {
        // Actualiser la liste après suppression
        this.loadBarbies();
      });
    }
  }
}
