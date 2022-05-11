import { Action, createReducer, on } from '@ngrx/store';
import { filtrosValidos, setFiltro } from './filtro.actions';

export const initialState: any = 'todos'

export const _filtroReducer = createReducer( initialState,
  on(setFiltro, (state, { filtro }) => filtro )
);

export function filtroReducer(state:filtrosValidos=initialState, action:Action) {
    return _filtroReducer(state, action);
}