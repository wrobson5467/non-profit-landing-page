import { Component, Input } from "@angular/core";
import { headerLogo } from "./headerLogo/headerLogo.component";

@Component({
    selector: "header-component",
    template: `<header>
        <header-logo/>
    </header>`,
    imports: [headerLogo]
})
export class HeaderComponent {
    @Input() isAdmin: boolean = false;

}