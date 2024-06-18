import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-portfolio';

  ngOnInit(): void {
    initFlowbite();
    AOS.init({
      disable: 'mobile',
    });
    window.addEventListener('load', AOS.refresh);
  }
}
