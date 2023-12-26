import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { HttpClient } from '@angular/common/http';
import { news } from './news';
import { users } from './user';

@Injectable()
export class AppService {
  todoArray: Todo[] = [];
  todoService = localStorage.setItem(
    'todoArray',
    JSON.stringify(this.todoArray)
  );
  setDataService = localStorage.setItem(
    'todoArray',
    JSON.stringify(this.todoArray)
  );

  topStoriesArray = 'https://hacker-news.firebaseio.com/v0/topstories.json';
  toprStoriesUrl = 'https://hacker-news.firebaseio.com/v0/item';
  jobStoriesArray = 'https://hacker-news.firebaseio.com/v0/jobstories.json';
  newStoriesArray = 'https://hacker-news.firebaseio.com/v0/newstories.json';
  showStoriesArray = 'https://hacker-news.firebaseio.com/v0/showstories.json';
  askStoriesArray = 'https://hacker-news.firebaseio.com/v0/askstories.json';
  bestStoriesArray = 'https://hacker-news.firebaseio.com/v0/beststories.json';
  userArray = 'https://hacker-news.firebaseio.com/v0/user';

  constructor(private httpClient: HttpClient) {}

  getUser(id:any) {
    return this.httpClient.get<users>(this.userArray + '/' + id + '.json');
  }

  getTopStories() {
    return this.httpClient.get<number[]>(this.topStoriesArray);
  }

  getNewStories() {
    return this.httpClient.get<number[]>(this.newStoriesArray);
  }

  getBestStories() {
    return this.httpClient.get<number[]>(this.bestStoriesArray);
  }

  getAskStories() {
    return this.httpClient.get<number[]>(this.askStoriesArray);
  }

  getShowStories() {
    return this.httpClient.get<number[]>(this.showStoriesArray);
  }

  getJobs() {
    return this.httpClient.get<number[]>(this.jobStoriesArray);
  }

  getStoryDetail(id: any) {
    return this.httpClient.get<news>(this.toprStoriesUrl + '/' + id + '.json');
  }

  getData() {
    this.todoService;
  }

  setData() {
    this.setDataService;
  }
}
