import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { StarComponent } from './star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      {
        path: 'courses', component: CourseListComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
