import { Component, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent {
  // constructor (private carousel: NgbCarousel)
  // @ViewChild('carousel', { static: true }) carousel: NgbCarousel;
  
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  onSlide($event: any){
    
  }
}
