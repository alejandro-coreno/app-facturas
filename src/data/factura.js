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
            Producto: 'CPU',
            precio: 499,
            cantidad: 1
        },

        {
            Producto: 'Celeron',
            precio: 344,
            cantidad: 2
        },

        {
            Producto: 'AMD',
            precio: 600,
            cantidad: 3
        } 
    ]
}