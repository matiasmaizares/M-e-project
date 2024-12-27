export interface Profile {
  id: number;
  nombre: string;
  ubicacion: string;
  precio: number;
  moneda: string;
  imagen: string;
  level: string;
  telefono: string;
  altura?: string;
  edad?: string;
  descripcion?: string;
  fotos?: string[];
  videos?: string[];
}
