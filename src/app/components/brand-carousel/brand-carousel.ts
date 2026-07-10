import { Component } from '@angular/core';

@Component({
  selector: 'app-brand-carousel',
  standalone: true,
  imports: [],
  templateUrl: './brand-carousel.html',
  styleUrl: './brand-carousel.css',
})
export class BrandCarousel {

  logos = [

    'logos/amd.png',
    'logos/intel.png',
    'logos/nvidia.png',
    'logos/asus.png',
    'logos/msi.png',
    'logos/corsair.png',
    'logos/kingston.png',
    'logos/samsung.png',
    'logos/gigabyte.png',
    'logos/westerndigital.png'

  ];

}