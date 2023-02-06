import { Component, OnInit } from '@angular/core';
import { ViewportRuler } from '@angular/cdk/scrolling';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  closeMenu: boolean = true;
  listStyle: string = 'navigation-list-container';
  menuStyle: string = 'navigation-container';
  iconStyle: string = 'navigation-menu__icon';
  navbarScroll = false;
  constructor(private viewportRuler: ViewportRuler, private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.breakpointObserver.observe(['(min-width: 780px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.listStyle = 'navigation-list-container';
          this.menuStyle = 'navigation-container';
          this.iconStyle = 'navigation-menu__icon';
        } else {
          this.closeMenu = true;
        }
      });

    window.addEventListener('scroll', this.scroll, true);
  };


  toggleMenu() {
    this.closeMenu = !this.closeMenu;
    this.styleOpen();
  }

  scroll = (): void => {
    if (window.pageYOffset > 50) {
      this.navbarScroll = true;
    } else {
      this.navbarScroll = false;
    }
  };

  

  styleOpen() {
    const openClass = '--open';
    if (this.closeMenu) {
      this.listStyle = 'navigation-list-container';
      this.menuStyle = 'navigation-container';
      this.iconStyle = 'navigation-menu__icon';
    } else {
      this.listStyle = this.listStyle + openClass
      this.menuStyle = this.menuStyle + openClass;
      this.iconStyle = this.iconStyle + openClass;
    }
  }
}
