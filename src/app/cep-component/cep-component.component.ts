import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cep-component',
  templateUrl: './cep-component.component.html',
  styleUrls: ['./cep-component.component.css']
})
export class CepComponentComponent implements OnInit {
 
  clients = Client[5];
  clientName = "";
  constructor() { }

  ngOnInit() {
  }

  addClient() {
    var client = new Client();
    client.name = this.clientName;
    this.clients.push(client);
  }
  
}

class Client {
   name:string;
}
