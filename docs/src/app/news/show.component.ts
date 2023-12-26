import { Component, Input } from '@angular/core';
import { AppService } from '../app.service';
import { news } from '../news';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shows',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class ShowsComponent {
  allStories: number[] = [];
  count: number = 1;
  loading!: boolean;
  subscription!: Subscription;

  constructor(private service: AppService) {}

  getAllStories() {
    this.subscription = this.service
      .getShowStories()
      .subscribe((response: number[]) => {
        this.allStories = response;
      });
  }

  ngOnInit() {
    this.getAllStories();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
