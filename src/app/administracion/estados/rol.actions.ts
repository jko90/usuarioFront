import {createAction, props} from "@ngrx/store";
import {rol} from "../modelos/rol.interface";

export enum RolActions {
  GET_ROL_LIST = '[rol] Get rol List',
  SET_ROL_LIST = '[rol] Set rol List',
  ADD_ROL_STATE = '[rol] Add rol (STATE)',
  MODIFY_ROL_STATE = '[rol] Modify rol (STATE)',
  REMOVE_ROL_STATE = '[rol] rEMOVE rol (STATE)',

}

export const obtenerRolList = createAction(RolActions.GET_ROL_LIST);
export const ponerRolList = createAction(RolActions.SET_ROL_LIST,
  props<{listRol: rol[]}>
);
export const agregarRolList = createAction(RolActions.ADD_ROL_STATE,
  props<{objRol: rol}>
);
export const actualizarRol = createAction(RolActions.MODIFY_ROL_STATE,
  props<{objRol: rol}>
);
export const eliminarRol = createAction(RolActions.REMOVE_ROL_STATE,
  props<{roId: number}>
);
