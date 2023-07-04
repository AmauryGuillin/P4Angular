import { Component, OnInit } from '@angular/core';
import { IssService } from '../iss.service';
import { Iss } from '../models/iss.model';

@Component({
  selector: 'app-iss',
  templateUrl: './iss.component.html',
  styleUrls: ['./iss.component.scss'],
})
export class IssComponent implements OnInit {
  iss: Iss[] = [];

  constructor(private issService: IssService) {}

  ngOnInit(): void {
    this.fetchIssLocation();
  }

  fetchIssLocation(): void {
    this.issService.getIssLocation().subscribe({
      next: (data: Iss[]) => {
        this.iss = data;
      },
      error: (error) => {
        throw new Error(
          `Erreur lors de la récupération des données : ${error}`
        );
      },
    });
  }
}
