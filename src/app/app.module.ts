import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

//import statement for service
import { BlogService } from './blog.service';
import { BlogHttpService } from './blog-http.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogViewComponent,
    BlogCreateComponent,
    BlogEditComponent,
    AboutComponent,
    NotFoundComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,

    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),

    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'create', component: BlogCreateComponent },
      { path: 'edit/:blogId', component: BlogEditComponent },
      { path: 'blog/:blogId', component: BlogViewComponent },
      { path: '**', component: NotFoundComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ])
  ],
  providers: [BlogService, BlogHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
