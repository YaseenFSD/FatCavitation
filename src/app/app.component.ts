import { Component } from '@angular/core';
import { faInstagram, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fat-cavitation';
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faFacebook = faFacebook;
}
