import { Component, OnInit } from '@angular/core';
import { AnimalsService } from '../animals.service';
import { Animal } from '../models/animal.model';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss'],
})
export class AnimalsComponent implements OnInit {
  animals!: Animal[];

  constructor(private animalsService: AnimalsService) {}

  ngOnInit(): void {
    this.fetchAnimalsData();
  }

  fetchAnimalsData(): void {
    this.animalsService.getAnimalsTest().subscribe({
      next: (data) => {
        this.animals = data;
      },
      error: (error) => {
        throw new Error(
          `Erreur lors de la récupération des données : ${error}`
        );
      },
    });
  }
}
