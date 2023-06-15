import { Component, Input } from '@angular/core';
import { AppService } from '../app.service';
import { news } from '../news';
import { users } from '../user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',

  styleUrls: ['./news.component.css'],
})
export class StoryComponent {
  @Input()
  id!: any;
  storyDetail: news = {};
  userDetail: users = {};

  constructor(private service: AppService) {}

  getStory(id: number) {
    this.service.getStoryDetail(id).subscribe((data: news) => {
      this.storyDetail = data;
    });
  }

  // getUsers(id: any) {
  //   this.service
  //     .getUser(id)
  //     .subscribe((data: users) => (this.userDetail = data));
  //     console.log(this.userDetail)
  // }

  ngOnInit() {
    this.getStory(this.id);
  }
}
