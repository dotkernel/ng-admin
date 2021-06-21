import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-layout',
  template: `
    <mat-sidenav-container class="content" hasBackdrop="false">
      <mat-sidenav #sidenav mode="push" hasBackdrop="false">
        <app-side-nav></app-side-nav>
      </mat-sidenav>

      <mat-sidenav-content>
        <app-header></app-header>

        <ng-content select="[mainContent]"></ng-content>

      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [
    '.content { width: 100%; height: 100%; }',
    'mat-sidenav { width: 260px; }',
  ]
})
export class LayoutComponent implements OnInit, AfterViewInit {
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(public service: LayoutService) { }

  ngAfterViewInit(): void {
    this.service.getToggle().subscribe(
      () => {
        this.sidenav.toggle();
      }
    );
  }

  ngOnInit(): void { }
}
