import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogHttpService } from  '../blog-http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public allBlogs=[];

  constructor(public blogHttpService: BlogHttpService) {
    console.log("Home constructor is called");
  }

  ngOnInit(): void {
    console.log("home component ngOnInit is called");

    this.allBlogs = this.blogHttpService.getAllBlogs().subscribe(

      data => {
        console.log("loding data");
        console.log(data);
        this.allBlogs = data["data"];
      },
      error => {
        console.log("error is occured");
        console.log(error.errorMessage)
  }
    )
}

}
