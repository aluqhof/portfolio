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
    if (typeof document !== 'undefined') {
      initFlowbite();
      AOS.init({
        disable: 'mobile',
      });
    }
    if(typeof window !== 'undefined'){
      window.addEventListener('load', AOS.refresh);
    }
  }
}
