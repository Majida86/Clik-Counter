import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public counter: number = 0;

  public less(): void {
    // 1ère méthode
    // if(this.counter > -10) 
    // {
    // this.counter--;
    // }

    // 2ème méthode
    if (this.counter <= -10) return;
    this.counter--;
  }
  public more(): void {
    // 1ère méthode
    //   if(this.counter < 10)
    //    {
    //   this.counter++;
    // }

    // 2ème méthode
    if (this.counter >= 10) return;
    this.counter++;
  }
}