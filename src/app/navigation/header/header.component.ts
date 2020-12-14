import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Authservice } from 'src/app/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
 @Output()  sidenavToggle = new EventEmitter<void>();
 isAuth= false;
 authSubscription: Subscription;


  constructor(private authService: Authservice) { }

  ngOnInit() {
    this.authSubscription=  this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
  }

  onToggleSidenav(){
   this.sidenavToggle.emit();
  }

  ngOnDestroy() {
    this.sidenavToggle.emit();
  }

}
