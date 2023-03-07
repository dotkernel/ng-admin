import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { AuthService } from 'src/app/core/authentication/services/auth.service';
import { LayoutService } from '../layout.service';
import {MatDialog} from "@angular/material/dialog";
import {ManageAccountComponent} from "../../components/manage-account/manage-account.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('header') header: ElementRef;

  private isShowing: boolean = true;
  account;
  dialogRef;

  constructor(
    private service: LayoutService,
    private renderer: Renderer2,
    public authService: AuthService,
    public dialog: MatDialog,
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
    this.getAccount();
  }

  getAccount() {
    this.authService.getUserAccount().subscribe((res: any) => {
      this.account = res;
      console.log(res)
      this.authService.accountSubject.next(res);
    });
  }

  public toggleNav() {
    this.service.setToggle(!this.isShowing);
  }

  openAccount(account) {
    if (!this.dialogRef) {
      this.dialogRef = this.dialog.open(ManageAccountComponent, {
        autoFocus: false,
        width: '50%',
        data: {
          account: account,
        }
      });

      this.dialogRef.afterClosed().subscribe(() => {
        this.dialogRef = undefined;
      });
    }
  }
}
