import { Component, OnInit, ViewChild } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';

import { ActivatedRoute, Router } from "@angular/router";

import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {


  constructor(public blogHttpService: BlogHttpService, private _route: ActivatedRoute, private router: Router, private toastr: ToastrService) { }

  public blogTitle: string;
  public blogDescription: string;
  public blogBodyHtml: string;
  public blogCategory: string;
  public blogAuthor : string;
  public possibleCategory = ["Comedy", "Drama", "Entertainement", "Technology", "Test"]

  ngOnInit(): void {

  }

  public createBlog() {

    let blogData = {

      title: this.blogTitle,
      description: this.blogDescription,
      blogBody: this.blogBodyHtml,
      category: this.blogCategory,
      fullName: this.blogAuthor,

    }

    this.blogHttpService.createBlog(blogData).subscribe(

      data => {
        console.log("Blog Created");
        console.log(data);
        this.toastr.success("Blog Posted Successfully");
        setTimeout(() => {
          this.router.navigate(['/blog', data.data.blogId])
        }, 2000)
      },
      error => {
        console.log("error is occured");
        console.log(error.errorMessage);
        this.toastr.error("Some error occured");
      }
    )
  }
}
