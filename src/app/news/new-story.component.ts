import { Component, Input } from '@angular/core';
import { AppService } from '../app.service';
import { news } from '../news';
import { Subscription } from 'rxjs';

@Component({
  selector: 'new-story',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewStoryComponent {
  allStories: number[] = [];
  count: number = 1;
  loading!: boolean;
  subscription!: Subscription;

  constructor(private service: AppService) {}

  getNewStories() {
    this.subscription = this.service
      .getNewStories()
      .subscribe((response: number[]) => {
        this.allStories = response;
      });
  }

  ngOnInit() {
    this.getNewStories();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
