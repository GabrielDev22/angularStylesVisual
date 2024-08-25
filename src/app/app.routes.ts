import { Routes } from '@angular/router';
import { CardVisualComponent } from './home/card-visual/card-visual.component';
import { SliderAdaptableComponent } from './home/slider-adaptable/slider-adaptable.component';
import { FormModalComponent } from './home/form-modal/form-modal.component';
import { CardInfiniteTresDComponent } from './home/card-infinite-tres-d/card-infinite-tres-d.component';
import { CardVisualTresDPersonajesComponent } from './home/card-visual-tres-d-personajes/card-visual-tres-d-personajes.component';

export const routes: Routes = [
    {path: '', component: CardVisualComponent},
    {path: 'slider', component: SliderAdaptableComponent},
    {path: 'formulario/modal', component: FormModalComponent},
    {path: 'card/3d', component: CardInfiniteTresDComponent},
    {path: 'card/visual/3d', component: CardVisualTresDPersonajesComponent},
];
