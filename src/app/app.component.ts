import { Container } from '@angular/compiler/src/i18n/i18n_ast';
/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
  <md-toolbar color="warn" class="md-elevation-z6">
    <span><md-icon>mood</md-icon></span>
    <a md-button md-ripple  [routerLink]=" ['./home'] " routerLinkActive="active">Home</a>
    <a md-button md-ripple  [routerLink]=" ['./detail'] " routerLinkActive="active">Detail</a>
    <a md-button md-ripple  [routerLink]=" ['./barrel'] " routerLinkActive="active">Barrel</a>
    <a md-button md-ripple  [routerLink]=" ['./survey'] " routerLinkActive="active">Survey</a>
    <a md-button md-ripple  [routerLink]=" ['./about'] " routerLinkActive="active">About</a>
  </md-toolbar>
  <main>
    <router-outlet></router-outlet>
  </main>

    <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>

    <footer>
      <span>WebPack Angular 2 Starter by <a [href]="url">@AngularClass</a></span>
      <div>
        <a [href]="url">
          <img [src]="angularclassLogo" width="25%">
        </a>
      </div>
    </footer>

  <span class="done">
    <button md-fab>
      <md-icon>check circle</md-icon>
    </button>
  </span>
  `
})
export class AppComponent implements OnInit {
  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'Angular 2 Webpack Starter';
  public url = 'https://twitter.com/AngularClass';

  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */

//TODO : Use appState instead of current to collect data. style quiz card, navigate next-back render answer, collect answer, submit answer
