import { NgModule } from "@angular/core";

import { MatButtonModule } from "@angular/material/button";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
    declarations: [
    ],
    imports: [
        NoopAnimationsModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatButtonModule,
        MatChipsModule
    ],
    exports: [
        NoopAnimationsModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatButtonModule,
        MatChipsModule
    ]
})
export class SharedModule { }