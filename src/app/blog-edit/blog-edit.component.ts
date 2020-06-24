import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';


@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  public currentBlog;
  public possibleCategory = ["Comedy", "Drama", "Entertainement", "Technology", "Test"]


  constructor(public blogHttpService: BlogHttpService, private _route: ActivatedRoute, private router: Router, private toastr: ToastrService) {

  }


  ngOnInit(): void {

    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    this.blogHttpService.getSingleBlogInfo(myBlogId).subscribe(

      data => {
        console.log(data);
        this.currentBlog = data["data"];
        console.log(this.currentBlog);
      },
      error => {
        console.log("error is occured");
        console.log(error.errorMessage)
      }
    )

  }

  public editThisBlog() {


    this.blogHttpService.editBlog(this.currentBlog.blogId, this.currentBlog).subscribe(

      data => {
        console.log("Blog Created");
        console.log(data);
        this.toastr.success("Blog Edited Successfully");
        setTimeout(() => {
          this.router.navigate(['/blog', this.currentBlog.blogId])
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
