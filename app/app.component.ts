import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/hello-world.html',
  styleUrls  : ['app/hello-world.css']

})
 
export class AppComponent {
	name = 'Angular';
	
	doLogin(event) {
		console.log("login");
	}
}