import { Component, Input } from '@angular/core';
import { AppService } from '../app.service';
import { news } from '../news';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent {
  allStories: number[] = [];
  count: number = 1;
  id!: any;
  loading: boolean = true;
  subscription!: Subscription;
  constructor(private service: AppService) {}

  getAllStories() {
    this.loading = true;
    this.subscription = this.service
      .getTopStories()
      .subscribe((response: number[]) => {
        this.loading = false;
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
