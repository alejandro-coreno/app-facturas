export const factura = {
    id: 10,
    nombre: 'Componentes PC',
    cliente: {
        nombreCliente: 'Pepe',
        apellido: 'Dee',
        direccion: {
            pais: 'USA', 
            city: 'Los Angeles',
            calle: 'One lim',
            numero: 24
        },
    },
    empresa: {
        nombreEmpresa: 'New EF',
        fiscalia: 12333
    } ,
    items: [
        {
            id: 1,
            producto: 'CPU',
            precio: 499,
            cantidad: 1
        },

        {
            id:2,
            producto: 'Celeron',
            precio: 344,
            cantidad: 2
        },

        {
            id: 3,
            producto: 'AMD',
            precio: 600,
            cantidad: 3
        } 
    ]
}