import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generic-page',
  templateUrl: './generic-page.component.html',
  styleUrls: ['./generic-page.component.scss']
})
export class GenericPageComponent {

  @Input() content: string = "CONTENT";
  @Input() images: string[] = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  // @Input



  onSlide($event: any){
    
  }
}
