import { Component } from '@angular/core';
import { animate, keyframes, query, stagger, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations: [
    trigger('cardAnimation', [
      transition('* => *', [
        query(':enter', style({opacity: 0}), {optional: true}),
        query(':enter', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75px)', offset: 0}),
            // style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))
        ]), {optional: true}),
      ])
    ])
  ]
})
export class ProductsComponent {

  productLine = [
    {
      img: 'assets/images/products/IMG_3553.jpg',
      title: 'HEATING SOFT CIRCUIT SYSTEMS',
      description: 'The LEL can be designed to act as a flexible heating element for heated clothing, shoes, interiors and soft goods for outdoor activities.',
      status: 'Market Ready'
    },
    {
      img: 'assets/images/products/Lighting_system_1.jpg',
      title: 'LIGHTING SOFT CIRCUIT SYSTEMS',
      description: 'The lighting LEL system features flat LEDs that can seamlessly fit into textiles for higher visibility safety apparel.',
      status: 'In Development'
    },
    {
      img: 'assets/images/products/Sensing_lines_1.jpg',
      title: 'DATA & POWER LINES FOR SENSORS',
      description: 'The LEL can be patterned to carry power and data on as many channels as\n' +
        '              necessary for your application. The layer can be made stretchable for certain applications and can be\n' +
        '              designed to work with your control modules and sensors.',
      status: 'In Development'
    },
    {
      img: 'assets/images/products/Cap_Touch_1.jpg',
      title: 'CAP TOUCH SOFT SENSORS',
      description: 'Capacitive touch sensors can be developed for soft interfaces and control\n' +
        '              panels. We can design the sensors to work with your control modules.',
      status: 'In Development'
    },
    {
      img: 'assets/images/products/LOOMIA+Social+Images-01.jpg',
      title: 'ANTENNAS & COILS',
      description: 'The LEL can be patterned and programmed to act as an antenna for certain use\n' +
        '              cases.',
      status: 'In Development'
    },
    {
      img: 'assets/images/products/1Z0A8866-Edit.jpg',
      title: 'TILE TAG',
      description: 'The TILE Tag is a hardware device that can be used for soft good product\n' +
        '              development. The TILE tag respects user data by giving case study subjects the option of storing their\n' +
        '              data\n' +
        '              in a decentralized data base. Image Credit: Tomorrow Lab',
      status: 'In Development'
    },
  ];

  productProduce = [
    {
      img: 'assets/images/products/produce_1.jpg',
      title: 'Soft Circuit',
      description: 'The soft circuit layer is drapable and is fully insulated. Our heating and capacitive\n' +
        '              touch\n' +
        '              functionalities are made of the soft layer and all flexible components are attached to this element. It\n' +
        '              acts\n' +
        '              as wired carrying power and data. This element is customized for your size, shape and fucntionality\n' +
        '              needs.'
    },
    {
      img: 'assets/images/products/produce_2.jpg',
      title: 'Flexible Components',
      description: 'Lighting, SMD sensor and feedback applications. These components can be customized to\n' +
        '              integrate your sensors.'
    },
    {
      img: 'assets/images/products/produce_3.jpg',
      title: 'LOOMIA Interconnect',
      description: 'Hard to soft connection area that houses the microcontroller, other circuit elements\n' +
        '              and\n' +
        '              battery connector of the LEL. All components including the connector will be chosen for your needs. (We\n' +
        '              can\n' +
        '              use your PCB design & BOM)'
    },
    {
      img: 'assets/images/products/produce_4.jpg',
      title: 'Power Adapter',
      description: 'LEL can work with off the shelf power banks with our custom adaptor cable design. We\n' +
        '              can\n' +
        '              also customize a battery pack for your needs.'
    },
  ];

  performances = [
    {
      img: 'assets/images/products/performance_1.jpg',
      title: 'Washability Testing',
      description: 'Our washability testing is done by a 3rd party in accordance with the\n' +
        '              AATCC 135 standard. We test for a cold wash on delicates and a 30min tumble dry low cycle.'
    },
    {
      img: 'assets/images/products/performance_2.jpg',
      title: 'Certification',
      description: 'Our heating LEL system with two off-the-shelf power bank options and our\n' +
        '              adaptor cable have been FCC certified. Additionally, our multi-purpose adaptor cable has been FCC & CE\n' +
        '              certified. Certificates available upon request.'
    },
    {
      img: 'assets/images/products/performance_3.jpg',
      title: 'Conformability',
      description: 'LOOMIA Electronic Layer products are more conformable than other\n' +
        '              turn-key solutions in the market. We provide the flexibility while not compromising the safety and insulation for\n' +
        '              your needs.'
    },
  ];

}
