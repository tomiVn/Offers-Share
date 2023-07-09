import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
//import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';

export const material = [
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatAutocompleteModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule, 
    MatSelectModule,
    MatTableModule,
];

export const provide_materials = [
    MatDatepickerModule,
    MatNativeDateModule 
]