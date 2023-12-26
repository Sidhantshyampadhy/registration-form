import {
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
  NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { NewsRoutingModule } from './news-routing.module';
import { StoryComponent } from './story.component';
import { JobsComponent } from './jobs.component';
import { NewStoryComponent } from './new-story.component';
import { ShowsComponent } from './show.component';
import { AskComponent } from './ask.component';
import { BestStoryComponent } from './best-story.component';

@NgModule({
  imports: [CommonModule, NewsRoutingModule],
  declarations: [
    NewsComponent,
    StoryComponent,
    JobsComponent,
    NewStoryComponent,
    ShowsComponent,
    AskComponent,
    BestStoryComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class NewsModule {}
