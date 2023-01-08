import { Component, OnInit } from '@angular/core';
import { Blog } from '../core/interfaces/blog';
import { BlogService } from '../core/services/blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
  blog?: Blog ;
  constructor(
    private serviceBlog : BlogService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.displayDetailleBlog(id!);
    console.log(this.blog);
    
  }
  displayDetailleBlog(blogId:string){
    this.serviceBlog.displayBlogById(blogId).subscribe((blog: Blog) => {
      console.log(blog);
      
      this.blog = blog          
    })
  }
}
