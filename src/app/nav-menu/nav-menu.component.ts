import { Component } from '@angular/core';

import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {
  public isCollapsed = true;

  constructor(private offcanvasService: NgbOffcanvas) {}

  open(content: any) {
		this.offcanvasService.open(content)
	}

  close(content:any){

  }

}
