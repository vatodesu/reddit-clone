import { Component, OnInit } from '@angular/core';
import {Website} from "./website-grid/website.model";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  websites!: Website[];
  constructor(){};
  
  ngOnInit(): void{
    this.websites = [
      new Website(
        'Google',
        'https://www.google.com',
        'https://bit.ly/3lkykqM',
        10),
        new Website(
          "angular",
          'https://www.angular.io',
          'https://bit.ly/2V5NNAC',
          10
        ),
        new Website(
          'Youtube',
          'https://www.youtube.com',
          'https://bit.ly/2WIqOvQ',
          10
        )
    ];
  }
  addWebsite(title: HTMLInputElement, link: HTMLInputElement, img: HTMLInputElement, form: HTMLFormElement): boolean{
    if((title.value && link.value && link.value) != ''){
      this.websites.push(new Website(title.value, link.value, img.value, 0));
      form.reset();
      console.log(`
      added website:
      with title - ${title.value}
      link - ${link.value}
      image link - ${img.value} 
      `);
    }
    else{
      alert("Fill All Fields")
    }
    return false;
  }

  sortedWebsites(): Website[]{
    return this.websites.sort((a: Website, b: Website) => b.votes - a.votes)
  }
}
