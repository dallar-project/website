import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(private router: Router, private route: ActivatedRoute) {
    }

    onNavClick(to: string) {
        window.location.hash = to;
    }

    openWhitepaper() {
        window.open('http://www.dallar.org/whitepaper.pdf');
    }

    discordInvite() {
        window.open('https://discord.gg/ZV7CP89');
    }
}
