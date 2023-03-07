import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MenuItem } from '../../../../interfaces/navigation';
import { MENU_ITEM_TOKEN } from '../../../../configs/configToken';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  public title: string = 'Demo Admin';
  public panelOpenState: boolean = false;

  public defaultIcon: string = 'dashboard';

  constructor(
    @Optional() @Inject(MENU_ITEM_TOKEN)
    public readonly menuItems: MenuItem | null
  ) {
  }

  ngOnInit(): void { }
}
