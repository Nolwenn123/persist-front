import { Component, OnInit } from '@angular/core';
import { BarbieService } from 'src/app/services/barbie.service';
import { Model } from 'src/models/model.model';
import { Barbie } from 'src/models/barbie.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  models: Model[] = [];
  newBarbie: Barbie = {
    barbieId: 0,
    modelId: 0,
    firstName: '',
    lastName: '',
    imageUrl: '',
    releaseYear: '',
    model: {
      model_id: 0,
      name: '',
      genre: '',
      release_year: 0,
      price: 0,
      image_url: ''
    }
  };

  constructor(private barbieService: BarbieService) { }

  ngOnInit(): void {
    this.loadModels();
  }

  loadModels(): void {
    this.barbieService.getModels().subscribe((data: Model[]) => {
      this.models = data;
    });
  }

  createBarbie(): void {
    this.barbieService.createBarbie(this.newBarbie).subscribe((createdBarbie: Barbie) => {
      // Réinitialiser le formulaire après la création réussie
      this.newBarbie = {
        barbieId: 0,
        modelId: 0,
        firstName: '',
        lastName: '',
        imageUrl: '',
        releaseYear: '',
        model: {
          model_id: 0,
          name: '',
          genre: '',
          release_year: 0,
          price: 0,
          image_url: ''
        }
      };
    });
  }
}
