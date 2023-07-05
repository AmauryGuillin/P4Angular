import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { IssService } from '../iss.service';
import { Iss } from '../models/iss.model';

@Component({
  selector: 'app-issmap',
  templateUrl: './issmap.component.html',
  styleUrls: ['./issmap.component.scss'],
})
export class IssmapComponent implements OnInit {
  public iss!: Iss[];
  public latitude!: number;
  public lontitude!: number;

  constructor(private issService: IssService) {}

  ngOnInit(): void {
    this.fetchIssLocation();
  }

  fetchIssLocation(): void {
    this.issService.getIssLocation().subscribe({
      next: (data: Iss[]) => {
        this.iss = data;
        this.latitude = Number(this.iss[0].latitude);
        this.lontitude = Number(this.iss[0].longitude);
        this.initMap();
      },
      error: (error) => {
        throw new Error(
          `Erreur lors de la récupération des données : ${error}`
        );
      },
    });
  }

  private initMap() {
    const map = L.map('map').setView([this.latitude, this.lontitude], 3);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    const issIcon = L.icon({
      iconUrl:
        '/assets/62-627547_international-space-station-transparent-background-international-space-station.png',
      iconSize: [50, 30],
    });

    const viewCircle = L.circle([this.latitude, this.lontitude], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.1,
      radius: 2000000,
    }).addTo(map);

    L.marker([this.latitude, this.lontitude], { icon: issIcon })
      .addTo(map)
      .bindPopup(`Here we are !`)
      .openPopup();
  }
}
