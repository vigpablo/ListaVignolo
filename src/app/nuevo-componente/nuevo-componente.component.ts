import { Component } from '@angular/core';

@Component({
  selector: 'app-nuevo-componente',
  templateUrl: './nuevo-componente.component.html',
  styleUrls: ['./nuevo-componente.component.scss']
})
export class NuevoComponenteComponent {

alumnos: any[] = [
    {nombre: 'Miguel', edad: 25},
    {nombre: 'Estefania', edad: 32},
    {nombre: 'Natalia', edad: 23},
    {nombre: 'Carlos', edad: 33}
];

estaCargando = true

}
