import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { tap, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {

  public allBlogs;
  public currentBlog;


  /* Without using proxy.conf.json*/
  //public baseUrl = 'http://localhost:3000/api/v1/blogs';

  public authToken = 'Admin';


  constructor(public _http: HttpClient) {
    console.log("blog http service is called")
  }

  /*Another mathod to pass the baseUrl using getBaseUrl() method */
  // getBaseUrl() {
  //   return 'http://localhost:3000/';

  // }


  public getAllBlogs(): any {
    // let myResponse = this._http.get(this.baseUrl + '/all' + '?authToken=' + this.authToken);
    // let myResponse = this._http.get(this.getBaseUrl() + 'api/v1/blogs/all?authToken=' + this.authToken);
    let myResponse = this._http.get('api/v1/blogs/all?authToken=' + this.authToken);
    console.log(myResponse);
    return myResponse;
  }


  public getSingleBlogInfo(currentBlogId): any {

    //let myResponse = this._http.get(this.baseUrl + '/view' + '/' + currentBlogId + '?authToken=' + this.authToken);
    let myResponse = this._http.get('api/v1/blogs/view' + '/' + currentBlogId + '?authToken=' + this.authToken);
    return myResponse;
  }

  public createBlog(blogData): any {

    //let myResponse = this._http.post(this.baseUrl + '/create' + '?authToken=' + this.authToken, blogData);
    let myResponse = this._http.post('api/v1/blogs/create' + '?authToken=' + this.authToken, blogData);
    return myResponse;
  }

  public deleteBlog(blogId): any {

    let data = {}
    //let myResponse = this._http.post(this.baseUrl + '/' + blogId + '/delete' + '?authToken=' + this.authToken, data);
    let myResponse = this._http.post('api/v1/blogs' + '/' + blogId + '/delete' + '?authToken=' + this.authToken, data);
    return myResponse;
  }

  public editBlog(blogId, blogData): any {

    //let myResponse = this._http.put(this.baseUrl + '/' + blogId + '/edit' + '?authToken=' + this.authToken, blogData);
    let myResponse = this._http.put('api/v1/blogs' + '/' + blogId + '/edit' + '?authToken=' + this.authToken, blogData);
    return myResponse;
  }

}
