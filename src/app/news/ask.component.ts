import { Component, Input } from '@angular/core';
import { AppService } from '../app.service';
import { news } from '../news';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ask',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class AskComponent {
  allStories: number[] = [];
  count: number = 1;
  loading!: boolean;
  subscription!: Subscription;

  constructor(private service: AppService) {}

  getAllStories() {
    this.subscription = this.service
      .getAskStories()
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
