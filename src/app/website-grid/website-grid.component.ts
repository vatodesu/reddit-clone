import { Component, Input, OnInit } from '@angular/core';
import {Website} from "./website.model";
@Component({
  selector: 'website-grid',
  templateUrl: './website-grid.component.html',
  styleUrls: ['./website-grid.component.css']
})
export class WebsiteGridComponent implements OnInit {
@Input() website!: Website;
  constructor() { 
    
  }

  ngOnInit(): void {
  }
/* functions */
  thumbsUp(): void {
    this.website.thumbsUp();
  }
  thumbsDown(): void{
    this.website.thumbsDown();
  }
}
