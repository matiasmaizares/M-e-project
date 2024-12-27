import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';
import { Profiles } from '../models/profiles';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  getProfiles(): Profiles {
    return {
      gold: [
        {
          id: 1,
          nombre: 'Producto 1',
          ubicacion: 'Buenos Aires',
          precio: 100,
          moneda: 'USD',
          imagen: 'https://via.placeholder.com/300x200',
          level: 'gold',
          telefono: '11661368',
        },
        {
          id: 2,

          nombre: 'Producto 4',
          ubicacion: 'Mendoza',
          precio: 250,
          moneda: 'USD',
          imagen: 'https://via.placeholder.com/300x200',
          level: 'gold',
          telefono: '11661368',
        },
        {
          id: 3,

          nombre: 'Producto 6',
          ubicacion: 'La Plata',
          precio: 300,
          moneda: 'USD',
          imagen: 'https://via.placeholder.com/300x200',
          level: 'gold',
          telefono: '11661368',
        },
        {
          id: 4,

          nombre: 'Producto 8',
          ubicacion: 'Mar del Plata',
          precio: 400,
          moneda: 'USD',
          imagen: 'https://via.placeholder.com/300x200',
          level: 'gold',
          telefono: '11661368',
        },
        {
          id: 5,

          nombre: 'Producto 9',
          ubicacion: 'Tucumán',
          precio: 180,
          moneda: 'USD',
          imagen: 'https://via.placeholder.com/300x200',
          level: 'gold',
          telefono: '11661368',
        },
        {
          id: 6,

          nombre: 'Producto 10',
          ubicacion: 'Neuquén',
          precio: 220,
          moneda: 'USD',
          imagen: 'https://via.placeholder.com/300x200',
          level: 'gold',
          telefono: '11661368',
        },
      ],
      silver: [
        {
          id: 7,

          nombre: 'Producto 2',
          ubicacion: 'Córdoba',
          precio: 200,
          moneda: 'USD',
          imagen: 'https://via.placeholder.com/300x200',
          level: 'silver',
          telefono: '11661368',
        },
        {
          id: 8,

          nombre: 'Producto 5',
          ubicacion: 'Salta',
          precio: 180,
          moneda: 'USD',
          imagen: 'https://via.placeholder.com/300x200',
          level: 'silver',
          telefono: '11661368',
        },
        {
          id: 9,

          nombre: 'Producto 7',
          ubicacion: 'Entre Ríos',
          precio: 120,
          moneda: 'USD',
          imagen: 'https://via.placeholder.com/300x200',
          level: 'silver',
          telefono: '11661368',
        },
        {
          id: 10,

          nombre: 'Producto 15',
          ubicacion: 'Chaco',
          precio: 250,
          moneda: 'USD',
          imagen: 'https://via.placeholder.com/300x200',
          level: 'silver',
          telefono: '11661368',
        },
        {
          id: 11,

          nombre: 'Producto 16',
          ubicacion: 'Santa Fe',
          precio: 300,
          moneda: 'USD',
          imagen: 'https://via.placeholder.com/300x200',
          level: 'silver',
          telefono: '11661368',
        },
        {
          id: 12,

          nombre: 'Producto 17',
          ubicacion: 'Corrientes',
          precio: 210,
          moneda: 'USD',
          imagen: 'https://via.placeholder.com/300x200',
          level: 'silver',
          telefono: '11661368',
        },
      ],
      diamond: [
        {
          id: 13,

          nombre: 'Producto 3',
          ubicacion: 'Rosario',
          precio: 150,
          moneda: 'USD',
          imagen: 'https://via.placeholder.com/300x200',
          level: 'diamond',
          telefono: '11661368',
        },
        {
          id: 14,

          nombre: 'Producto 22',
          ubicacion: 'Santa Cruz',
          precio: 500,
          moneda: 'USD',
          imagen: 'https://via.placeholder.com/300x200',
          level: 'diamond',
          telefono: '11661368',
        },
        {
          id: 19,

          nombre: 'Producto 23',
          ubicacion: 'Tierra del Fuego',
          precio: 550,
          moneda: 'USD',
          imagen: 'https://via.placeholder.com/300x200',
          level: 'diamond',
          telefono: '11661368',
        },
        {
          id: 20,
          nombre: 'Producto 24',
          ubicacion: 'San Luis',
          precio: 400,
          moneda: 'USD',
          imagen: 'https://via.placeholder.com/300x200',
          level: 'diamond',
          telefono: '11661368',
        },
        {
          id: 21,
          nombre: 'Producto 25',
          ubicacion: 'Formosa',
          precio: 450,
          moneda: 'USD',
          imagen: 'https://via.placeholder.com/300x200',
          level: 'diamond',
          telefono: '11661368',
        },
        {
          id: 22,

          nombre: 'Producto 26',
          ubicacion: 'Río Negro',
          precio: 480,
          moneda: 'USD',
          imagen: 'https://via.placeholder.com/300x200',
          level: 'diamond',
          telefono: '11661368',
        },
      ],
    };
  }

  getProfile(id: number): Profile {
    return {
      id: 1,
      nombre: 'Julieta',
      ubicacion: 'Buenos Aires',
      precio: 200,
      moneda: 'USD',
      imagen: 'https://via.placeholder.com/400x600',
      level: 'gold',
      telefono: '549123456789',
      altura: '1.70 m',
      edad: '25 años',
      descripcion: `Hola soy Luz, una dama dulce, femenina, delicada y simpática.
      En la intimidad soy ardiente y pasional, me gustan los besos y las caricias porque son la conexión y el inicio para generar clima y confianza. Te puedo dar lluvias de placer y cumplir tus fantasías para que disfrutes nuestro encuentro de principio a fin. Con mi compañía puedes disfrutar charlas, cenas, tragos, paseos y viajes.
      Me destacan: mi elegancia, cordialidad, discreción, buen trato y respeto sobre todo.
      Adoro el sexo, la música, el arte y la cultura. Soy 100% real, no dudes en contactarme para que pactemos un momento de distensión y placer.
      Cuento con departamento propio y además realizo encuentros en domicilios y hoteles.
      Absoluta discreción y responsabilidad.`,
      fotos: [
        'https://via.placeholder.com/300x200',
        'https://via.placeholder.com/300x200',
        'https://via.placeholder.com/300x200',
      ],
      videos: [
        'https://www.w3schools.com/html/mov_bbb.mp4',
        'https://www.w3schools.com/html/movie.mp4',
      ],
    };
  }

  getProfilesList(level: string): Profile[] {
    return [
      {
        id: 7,

        nombre: 'Producto 2',
        ubicacion: 'Córdoba',
        precio: 200,
        moneda: 'USD',
        imagen: 'https://via.placeholder.com/300x200',
        level: 'silver',
        telefono: '11661368',
      },
      {
        id: 8,

        nombre: 'Producto 5',
        ubicacion: 'Salta',
        precio: 180,
        moneda: 'USD',
        imagen: 'https://via.placeholder.com/300x200',
        level: 'silver',
        telefono: '11661368',
      },
      {
        id: 9,

        nombre: 'Producto 7',
        ubicacion: 'Entre Ríos',
        precio: 120,
        moneda: 'USD',
        imagen: 'https://via.placeholder.com/300x200',
        level: 'silver',
        telefono: '11661368',
      },
      {
        id: 10,

        nombre: 'Producto 15',
        ubicacion: 'Chaco',
        precio: 250,
        moneda: 'USD',
        imagen: 'https://via.placeholder.com/300x200',
        level: 'silver',
        telefono: '11661368',
      },
      {
        id: 11,

        nombre: 'Producto 16',
        ubicacion: 'Santa Fe',
        precio: 300,
        moneda: 'USD',
        imagen: 'https://via.placeholder.com/300x200',
        level: 'silver',
        telefono: '11661368',
      },
      {
        id: 12,

        nombre: 'Producto 17',
        ubicacion: 'Corrientes',
        precio: 210,
        moneda: 'USD',
        imagen: 'https://via.placeholder.com/300x200',
        level: 'silver',
        telefono: '11661368',
      },
      {
        id: 7,

        nombre: 'Producto 2',
        ubicacion: 'Córdoba',
        precio: 200,
        moneda: 'USD',
        imagen: 'https://via.placeholder.com/300x200',
        level: 'silver',
        telefono: '11661368',
      },
      {
        id: 8,

        nombre: 'Producto 5',
        ubicacion: 'Salta',
        precio: 180,
        moneda: 'USD',
        imagen: 'https://via.placeholder.com/300x200',
        level: 'silver',
        telefono: '11661368',
      },
      {
        id: 9,

        nombre: 'Producto 7',
        ubicacion: 'Entre Ríos',
        precio: 120,
        moneda: 'USD',
        imagen: 'https://via.placeholder.com/300x200',
        level: 'silver',
        telefono: '11661368',
      },
      {
        id: 10,

        nombre: 'Producto 15',
        ubicacion: 'Chaco',
        precio: 250,
        moneda: 'USD',
        imagen: 'https://via.placeholder.com/300x200',
        level: 'silver',
        telefono: '11661368',
      },
      {
        id: 11,

        nombre: 'Producto 16',
        ubicacion: 'Santa Fe',
        precio: 300,
        moneda: 'USD',
        imagen: 'https://via.placeholder.com/300x200',
        level: 'silver',
        telefono: '11661368',
      },
      {
        id: 12,

        nombre: 'Producto 17',
        ubicacion: 'Corrientes',
        precio: 210,
        moneda: 'USD',
        imagen: 'https://via.placeholder.com/300x200',
        level: 'silver',
        telefono: '11661368',
      },
      {
        id: 7,

        nombre: 'Producto 2',
        ubicacion: 'Córdoba',
        precio: 200,
        moneda: 'USD',
        imagen: 'https://via.placeholder.com/300x200',
        level: 'silver',
        telefono: '11661368',
      },
      {
        id: 8,

        nombre: 'Producto 5',
        ubicacion: 'Salta',
        precio: 180,
        moneda: 'USD',
        imagen: 'https://via.placeholder.com/300x200',
        level: 'silver',
        telefono: '11661368',
      },
      {
        id: 9,

        nombre: 'Producto 7',
        ubicacion: 'Entre Ríos',
        precio: 120,
        moneda: 'USD',
        imagen: 'https://via.placeholder.com/300x200',
        level: 'silver',
        telefono: '11661368',
      },
      {
        id: 10,

        nombre: 'Producto 15',
        ubicacion: 'Chaco',
        precio: 250,
        moneda: 'USD',
        imagen: 'https://via.placeholder.com/300x200',
        level: 'silver',
        telefono: '11661368',
      },
      {
        id: 11,

        nombre: 'Producto 16',
        ubicacion: 'Santa Fe',
        precio: 300,
        moneda: 'USD',
        imagen: 'https://via.placeholder.com/300x200',
        level: 'silver',
        telefono: '11661368',
      },
      {
        id: 12,

        nombre: 'Producto 17',
        ubicacion: 'Corrientes',
        precio: 210,
        moneda: 'USD',
        imagen: 'https://via.placeholder.com/300x200',
        level: 'silver',
        telefono: '11661368',
      },
    ];
  }
}
