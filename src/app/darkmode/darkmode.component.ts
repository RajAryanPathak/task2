import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-darkmode',
  templateUrl: './darkmode.component.html',
  styleUrls: ['./darkmode.component.css']
})
export class DarkmodeComponent implements OnInit {
  darkmode = true;
  dark_mode = "DARK MODE"
  toggleDarkTheme(): void {
      document.body.classList.toggle('dark-theme');
      this.darkmode =! this.darkmode;
      if(this.darkmode){
      this.dark_mode = "DARK MODE"}
      else
      {
      this.dark_mode = "LIGHT MODE"
      }

    }
  constructor() { }

  ngOnInit() {
  }

}
