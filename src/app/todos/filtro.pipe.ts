import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { filtrosValidos } from '../filtro/filtro.actions';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  //Los pipes no mutan la data sino que solo la camban visualmente

  transform(todos: Todo[], filtro: filtrosValidos): Todo[] {

    console.log('filtro ',filtro);
    
    switch( filtro ) {

      case 'completados':
        return todos.filter( todo => todo.completado );
      case 'pendientes':
        return todos.filter( todo => !todo.completado );

      default:
        return todos;

    }
  }

}
