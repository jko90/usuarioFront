import {rol} from "./rol.interface";

export interface usuario {
  usuId: number;
  usuUsuario: string;
  usuClave: string;
  aproRol: rol;
  usuFechcrea: Date;
  usuFechingres: Date;
  usuEstado: string;
  usuNombre: string;
}
