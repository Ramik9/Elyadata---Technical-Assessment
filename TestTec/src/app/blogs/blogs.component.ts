import { Component, OnInit } from '@angular/core';
import { Blog } from '../core/interfaces/blog';
import { BlogService } from '../core/services/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  blogs: Blog[] = []
  
  

  constructor(
    private serviceBlog : BlogService
  ) { }

  ngOnInit(): void {
    this.displayBlog();
    
    
  }
  displayBlog(){
    this.serviceBlog.displayBlog().subscribe((blogs: Blog[]) => {
      this.blogs=blogs;
          
    })
  }

  upVote(blogId:string){
    this.serviceBlog.upVote(blogId).subscribe(() => {
      this.blogs=[];
      this.displayBlog();
      
      
  })
  
}
downVote(blogId:string){
  this.serviceBlog.downVote(blogId).subscribe(() => {
    this.blogs=[];
    this.displayBlog();  
})
}


}
