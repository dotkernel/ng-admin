import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('header') header: ElementRef;

  private isShowing: boolean = true;

  constructor(
    private service: LayoutService,
    private renderer: Renderer2
  ) { }

  ngAfterViewInit(): void {
    this.service.getToggle().subscribe(
      res => {
        this.isShowing = res;

        this.renderer.removeClass(this.header.nativeElement, 'navShow');
        this.renderer.removeClass(this.header.nativeElement, 'navHidden');

        this.renderer.addClass(this.header.nativeElement, this.isShowing ? 'navShow' : 'navHidden');
      }
    );
  }

  ngOnInit(): void {
  }

  public toggleNav() {
    this.service.setToggle(!this.isShowing);
  }
}
