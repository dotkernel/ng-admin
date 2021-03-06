import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MenuItem } from '../../../interfaces/navigation';
import { MENU_ITEM_TOKEN } from '../../../configs/configToken';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatRippleModule,
    MatIconModule,
    MatExpansionModule,
    MatMenuModule,
  ],
  exports: [
    LayoutComponent,
  ]
})
export class LayoutModule {
  static forRoot(menuItems: MenuItem[]): ModuleWithProviders<LayoutModule> {
    return {
      ngModule: LayoutModule,
      providers: [
        { provide: MENU_ITEM_TOKEN, useValue: menuItems }
      ]
    }
  }
 }
