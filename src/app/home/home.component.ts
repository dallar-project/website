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

    downloadWallet(wallet: string) {
        switch (wallet) {
            case "pc":
                window.open('https://github.com/dallar-project/dallar/releases/download/1.3.0/Dallar-x64.zip');
                break;
            case "osx":
                window.open('https://github.com/dallar-project/dallar/releases/download/1.3.0/Dallar-Qt.dmg');
                break;
            case "android":
                window.open('https://play.google.com/store/apps/details?id=org.dallar.dallar');
                break;
            case "source-desktop":
                window.open('https://github.com/dallar-project/dallar/');
                break;
            case "source-copay":
                window.open('https://github.com/dallar-project/copay/');
                break;
        }
    }

    downloadMiner(wallet: string) {
        switch (wallet) {
            case "nvidia":
                window.open('https://github.com/dallar-project/ccminer/files/1596594/ccminer-x64.zip');
                break;
            case "amd":
                window.open('https://github.com/dallar-project/sgminer/releases/download/d1.0/sgminer-x86.zip');
                break;
            case "source-nvidia":
                window.open('https://github.com/dallar-project/ccminer/');
                break;
            case "source-amd":
                window.open('https://github.com/dallar-project/sgminer/');
                break;
        }
    }

    discordInvite() {
        window.open('https://discord.gg/ZV7CP89');
    }

    openNvidiaMiner() {
        window.open('https://github.com/dallar-project/ccminer/releases');
    }
}
