import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  blogs = [
    {
      img: 'assets/images/blog/Blog_1.gif',
      title: '5 Questions About E-Textiles That You’ve Been Wanting to Ask',
      author: 'MADISON MAXEY',
      date: 'AUGUST 12, 2019'
    },
    {
      img: 'assets/images/blog/Blog_2.jpg',
      title: 'Washability and E-Textiles',
      author: 'MADISON MAXEY',
      date: 'JUNE 25, 2019'
    },
    {
      img: 'assets/images/blog/Blog_3.png',
      title: 'PROTOTYPING - GERMICIDE E- TEXTILES',
      author: 'MADISON MAXEY',
      date: 'MAY 13, 2019'
    },
    {
      img: 'assets/images/blog/Blog_4.png',
      title: 'A Framework for the Engineering and Design of E-Textiles',
      author: 'MADISON MAXEY',
      date: 'MAY 8, 2019'
    },
    {
      img: 'assets/images/blog/Blog_5.jpg',
      title: 'A Brief History of E-Textiles / Soft Circuits',
      author: 'MADISON MAXEY',
      date: 'APRIL 20, 2019'
    },
    {
      img: 'assets/images/blog/Blog_6.gif',
      title: 'Seamless E-Textile User Interfaces for Automotive and Interiors',
      author: 'MADISON MAXEY',
      date: 'APRIL 6, 2019'
    },
    {
      img: 'assets/images/blog/Blog_7.jpg',
      title: 'An  Intro to E-Textiles / Soft Circuits',
      author: 'MADISON MAXEY',
      date: 'APRIL 5, 2019'
    },
    {
      img: 'assets/images/blog/Blog_8.jpg',
      title: 'TILE Tag Development Update',
      author: 'MADISON MAXEY',
      date: 'FEBRUARY 26, 2019'
    },
    {
      img: 'assets/images/blog/Blog_9.gif',
      title: 'Hello, Material Connexion Library!',
      author: 'MADISON MAXEY',
      date: 'NOVEMBER 14, 2018'
    }
  ];


}
