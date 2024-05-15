import { Component, OnInit } from '@angular/core';
import { Event, Comment } from './event.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent implements OnInit {
  events: Event[]=[];
  showAddForm: boolean = false;


  constructor(private router:Router) { }
  showDetails(event: Event) {
    // Navigate to the details page with the event ID as a route parameter
    this.router.navigate(['/details', event.id]);
  }

  ngOnInit(): void {
    // Fetch events data from service or API
    // For demonstration purposes, let's assume events data is hardcoded here
    this.events = [
      {
        id: 1,
        name: 'Phishing Attempt',
        creationDateTime: new Date(),
        affectedBrand: 'Example Brand',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
        maliciousURL: 'http://malicious-url.com',
        maliciousDomainRegistrationDate: new Date(),
        maliciousDomainDNSRecords: ['A: 192.168.1.1', 'NS: ns1.example.com', 'MX: mail.example.com'],
        matchingKeywords: ['Brand', 'Product'],
        status: 'todo',
        analystComments: [
          { id: 1, timestamp: new Date(), content: 'Initial assessment started.' }
        ]
      }
    ];
  }
  openAddForm(): void {
    this.showAddForm = true;
  }

  closeAddForm(): void {
    this.showAddForm = false;
  }
  saveEvent():void{
    
  }

}
