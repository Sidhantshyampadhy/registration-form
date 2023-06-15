import { Component, Input } from '@angular/core';
import { AppService } from '../app.service';
import { news } from '../news';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-jobs',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class JobsComponent {
  allStories: number[] = [];
  count: number = 1;
  loading!: boolean;
  subscription!: Subscription;

  constructor(private service: AppService) {}

  getAllJobs() {
    this.subscription = this.service
      .getJobs()
      .subscribe((response: number[]) => {
        this.allStories = response;
      });
  }

  ngOnInit() {
    this.getAllJobs();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
