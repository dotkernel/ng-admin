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

      <mat-sidenav-content class="sidenav-content">

        <div class="ng-container">

          <app-header></app-header>
          
            <main>
              <ng-content ng-content select="[mainContent]"></ng-content>
            </main>

            <app-footer></app-footer>
        </div>

      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [
    '.content { width: 100%; height: 100%; }',
    'mat-sidenav { width: 260px; }',
    '.ng-container { width: 100%; min-height: 100%; display: flex; flex-direction: column; flex-wrap: nowrap;}',
    'main { flex-grow: 1; min-height: 2em; }',
    'main::-webkit-scrollbar-track { -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); }',
    'main::-webkit-scrollbar-thumb { background-color: darkgrey; outline: 1px solid slategrey; }',
    'main { position: relative; top: 64px; padding: 15px }',
    '.sidenav-content { width: calc(100% - 260px); }'
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
