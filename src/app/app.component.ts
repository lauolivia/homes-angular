import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="assets/logo.svg" alt="logo" aria-hidden="true"/>
    </header>
  </main>
  <section class="content">
    <!-- <app-home> </app-home> -->
     <router-outlet> </router-outlet>
  </section>
  
  `,
  imports: [HomeComponent, RouterModule],
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
