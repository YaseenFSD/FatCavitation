import { Component } from '@angular/core';

@Component({
  selector: 'app-ultrasonic',
  templateUrl: './ultrasonic.component.html',
  styleUrls: ['./ultrasonic.component.scss']
})
export class UltrasonicComponent {

  content = "Ultrasonic cavitation tones the body using radio frequencies and low-frequency ultrasonic waves. These waves form bubbles around fat deposits under the skin. The bubbles then burst, breaking the fat deposits into the interstitial and the lymphatic systems where they are drained"
  images = [
    "assets/image1.jpg",
    "assets/image2.jpg"
  ]
}
