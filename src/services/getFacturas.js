import { factura } from "../data/factura"

export const getFacturas = () => {

     // Convertimos el arreglo a uno nuevo con los valores multiplicados y con el reduce realizamos la suma de cada uno de los valores 

     const total = factura.items
          .map( item  => item.precio * item.cantidad )
          .reduce((acumulador, currentValue) => acumulador + currentValue , 0);
    
     return { ...factura , total }
}