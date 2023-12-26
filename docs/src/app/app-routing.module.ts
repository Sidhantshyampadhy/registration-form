import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { NewsComponent } from './news/news.component';
import { JobsComponent } from './news/jobs.component';
import { NewStoryComponent } from './news/new-story.component';
import { ShowsComponent } from './news/show.component';
import { AskComponent } from './news/ask.component';
import { BestStoryComponent } from './news/best-story.component';

const routes: Routes = [
  {
    path: 'form',
    component: FormComponent,
  },
  {
    path: 'todo',
    loadChildren: () =>
      import('./todo/todo.module').then((m) => m.TodoPageModule),
  },
  {
    path: '',
    redirectTo: 'form',
    pathMatch: 'full',
  },
  {
    path: 'news',
    component: NewsComponent,
  },
  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then((m) => m.NewsModule),
  },
  {
    path: 'jobs',
    component: JobsComponent,
  },
  {
    path: 'newest',
    component: NewStoryComponent,
  },
  {
    path: 'shows',
    component: ShowsComponent,
  },
  {
    path: 'ask',
    component: AskComponent,
  },
  {
    path: 'beststories',
    component: BestStoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
