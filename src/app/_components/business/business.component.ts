import { Component } from '@angular/core';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent {

  gallery = [
    {
      img: 'assets/images/business/jairph-1174690-unsplash.jpg',
      title: 'Consumer Apparel'
    },
    {
      img: 'assets/images/business/kamyab-lotfollahyan-1161761-unsplash.jpg',
      title: 'PPE'
    },
    {
      img: 'assets/images/business/jairph-1174690-unsplash.jpg',
      title: 'Automotive'
    },
    {
      img: 'assets/images/business/ostap-senyuk-203227-unsplash.jpg',
      title: 'Outdoor Gear'
    },
    {
      img: 'assets/images/business/jairph-1174690-unsplash.jpg',
      title: 'Sport Apparel'
    },
    {
      img: 'assets/images/business/kamyab-lotfollahyan-1161761-unsplash.jpg',
      title: 'Soft Goods'
    },
    {
      img: 'assets/images/business/ostap-senyuk-203227-unsplash.jpg',
      title: 'Snow Gear'
    },
    {
      img: 'assets/images/business/kamyab-lotfollahyan-1161761-unsplash.jpg',
      title: 'Interiors'
    },
    {
      img: 'assets/images/business/jairph-1174690-unsplash.jpg',
      title: 'Footwear'
    },
    {
      img: 'assets/images/business/kamyab-lotfollahyan-1161761-unsplash.jpg',
      title: 'Health focused Wearables'
    },
  ];

}
