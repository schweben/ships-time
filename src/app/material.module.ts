import { NgModule } from '@angular/core';
import { MatCardModule, MatDividerModule, MatTableModule, MatToolbarModule } from '@angular/material';

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
