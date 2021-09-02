import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WeatherApp';

  showMenu = " "
  darkModeActive: any

  toggleMenu(){
    console.log("toggleMenu");
  }

  modeToggleSwitch(){
    console.log("modeToggleSwitch");
  }
}
