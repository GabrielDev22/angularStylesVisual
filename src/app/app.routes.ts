import { Routes } from '@angular/router';
import { CardVisualComponent } from './home/card-visual/card-visual.component';
import { SliderAdaptableComponent } from './home/slider-adaptable/slider-adaptable.component';
import { FormModalComponent } from './home/form-modal/form-modal.component';

export const routes: Routes = [
    {path: '', component: CardVisualComponent},
    {path: 'slider', component: SliderAdaptableComponent},
    {path: 'formulario/modal', component: FormModalComponent}
];
