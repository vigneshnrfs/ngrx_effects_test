import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { Feature1Effects } from './feature1.effects';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([Feature1Effects])
  ],
  declarations: []
})
export class Feature1Module { }
