import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    imports: [
        MatCardModule,
        MatDividerModule,
        MatTableModule,
        MatToolbarModule,
    ],
    exports: [
        MatCardModule,
        MatDividerModule,
        MatTableModule,
        MatToolbarModule,
    ],
})
export class MaterialModule { }
