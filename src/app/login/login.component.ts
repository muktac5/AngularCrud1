import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() strname="";
  @Input() userobj:any={};

  @Output() messageToEmit = new EventEmitter();

  strData="";
  sendMessageToParent()
  {
    this.messageToEmit.emit(this.strData);
  }


}
