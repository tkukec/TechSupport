import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Event } from '../main-page/event.model';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrl: './details-page.component.css'
})
export class DetailsPageComponent {
  event!: Event;
  eventId: number=0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventService: DataService
  ) { }

  ngOnInit(): void {
    // Get the event ID from the route parameter
    this.route.params.subscribe(params => {
      this.eventId = +params['id']; // Convert the parameter to a number
      // Fetch the event details using the event ID
      this.eventService.getEventById(this.eventId).subscribe(
        (event: Event) => {
          this.event = event;
        },
        error => {
          console.log('Error fetching event details:', error);
        }
      );
    });
  }

  editEvent(): void {
    // Navigate to the edit event page, passing the event ID as a route parameter
    this.router.navigate(['/home', this.eventId, 'edit']);
  }

  deleteEvent(): void {
    // Call the delete event method in your event service
    this.eventService.deleteEvent(this.eventId).subscribe(
      () => {
        console.log('Event deleted successfully.');
        // Navigate back to the list of events
        this.router.navigate(['/home']);
      },
      error => {
        console.log('Error deleting event:', error);
      }
    );
  }

  goBack(): void {
    // Navigate back to the list of events
    this.router.navigate(['/home']);
  }

}
