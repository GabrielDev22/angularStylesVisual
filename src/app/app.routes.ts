import { Routes } from '@angular/router';
import { CardVisualComponent } from './home/card-visual/card-visual.component';
import { SliderAdaptableComponent } from './home/slider-adaptable/slider-adaptable.component';

export const routes: Routes = [
    {path: '', component: CardVisualComponent},
    {path: 'slider', component: SliderAdaptableComponent}
];
