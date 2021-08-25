import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';
import { PresenceService } from './_services/presence.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating app';
  users: any;

  constructor(private accountService: AccountService, private presence: PresenceService){} 
  
  ngOnInit() {
    this.setCurrentUser();
  }

  setCurrentUser() {
    const local = localStorage.getItem('user');
    
    if(!local){
     return;
    }
    const user: User = JSON.parse(local);
    if(user){
      this.accountService.setCurrentUser(user);
      this.presence.createHubConnection(user);
    }
    
  }

}
