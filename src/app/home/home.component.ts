/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, OnInit } from "@angular/core";

@Component({
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html',
})
export class HomeComponent {

    openWhitepaper() {
        window.open('http://www.dallar.org/whitepaper.pdf');
    }

    openWallet() {
        window.open('https://github.com/dallar-project/dallar/releases');
    }

    discordInvite() {
        window.open('https://discord.gg/ZV7CP89');
    }

    openNvidiaMiner() {
        window.open('https://github.com/dallar-project/ccminer/releases');
    }
}
