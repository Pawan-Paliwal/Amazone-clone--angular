import { Component, OnDestroy, OnInit } from '@angular/core';
import { Authservice } from '../auth/auth-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-preheader',
  templateUrl: './preheader.component.html',
  styleUrls: ['./preheader.component.css']
})
export class PreheaderComponent implements OnInit,OnDestroy {
private Authsub:Subscription;
  isAuthentication=false;

constructor(private authservice:Authservice){}

 ngOnInit(): void {
    this.Authsub= this.authservice.user.subscribe(user=>{
      this.isAuthentication=!!user;
     })
 }

 ngOnDestroy(): void {
     this.Authsub.unsubscribe();
 }
}
