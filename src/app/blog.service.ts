import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public allBlogs = [{

    "blogId": "1",
    "lastModified": "2020-04-28T10:46:12.854Z",
    "created": "2019-04-28T10:46:12.854Z",
    "tags": "",
    "author": "Gourav",
    "category": "Comedy",
    "isPublished": true,
    "views": 0,
    "bodyHtml": "This is a 1st blog body HTML",
    "description": "This is a 1st blog description",
    "title": "This is blog 1",
  },
  {
    "blogId": "2",
    "lastModified": "2020-04-28T10:26:12.854Z",
    "created": "2019-04-28T10:26:12.854Z",
    "tags": "",
    "author": "Vikas",
    "category": "Comedy",
    "isPublished": true,
    "views": 0,
    "bodyHtml": "This is a 2nd blog body HTML",
    "description": "This is a 2nd blog description",
    "title": "This is blog 2",
  },{
    "blogId": "3",
    "lastModified": "2020-04-28T10:06:12.854Z",
    "created": "2019-04-28T10:06:12.854Z",
    "tags": "",
    "author": "Gourav",
    "category": "Comedy",
    "isPublished": true,
    "views": 0,
    "bodyHtml": "This is a 3rd blog body HTML",
    "description": "This is a 3rd blog description",
    "title": "This is blog 3",
  }
  ]

  public currentBlog;

  constructor() {
    console.log("service constructor is called")
   }

  public getAllBlogs(){
    //metgod to return all the blogs
    return this.allBlogs;
  }

  public getSingleBlogInfo(currentBlogId): any {

    //using a for of loop here from type script

    for (let blog of this.allBlogs) {
      if (blog.blogId == currentBlogId) {
        this.currentBlog = blog;
      }
    }
    console.log(this.currentBlog);
    return this.currentBlog;
  }

}
