import { useEffect, useState } from "react";
import { getFacturas, calcularItems } from "./services/getFacturas";
import InvoceView from "./components/InvoiceView";
import InvoceDataClient from "./components/InvoiceDataClient";
import InvoceDataEmpresa from "./components/InvoceDataEmpresa";
import ListItemsView from "./components/ListItemsView";
import TotalView from "./components/TotalView";
import FormItemsView from "./components/FormItemsView";


const invoceInitial = {
    id: 0,
    nombre: '',
    cliente: {
        nombreCliente: '',
        apellido: '',
        direccion: {
            pais: '', 
            city: '',
            calle: '',
            numero: 0
        },
    },
    empresa: {
        nombreEmpresa: '',
        fiscalia: ''
    } ,
    items: []
        
}

const InvoiceApp = () => {
    // Contador para el id de manera dinamica 
    const [ counter , setCounter ] = useState(4);

    const [facturas,setfacturas] = useState(invoceInitial);

    // Guardamos el estado de los items iniciales para poder agregar nuevos
    const [items , setItems] = useState([]);
    
    const [total, setTotal] = useState(0);
     
    useEffect(() => {
        const data = getFacturas();
        setfacturas( data );
        setItems( data.items);
    }, []);

    useEffect(() => {
        setTotal(calcularItems(items));
    }, [items])

    //obtenemos el objeto facturas que retorna la funcion
    const {nombre, id, empresa, cliente } = facturas;

    const handleAddItems = ({ productValue, precioValue, cantidadValue}) => {
        setItems([...items, {
            id: counter,
            producto: productValue.trim(), 
            precio: parseInt(precioValue.trim(), 10), 
            cantidad: +cantidadValue.trim() 
        }]); 

        setCounter( counter + 1 );
    }

    const handleDeletedItem = (id) => {
        const deleteItem = items.filter( item  => item.id !== id);
        setItems( deleteItem );

    }

    return (
        
        <div className="container">
            <div className="card my-3">
                <div className="card-header">
                        Ejemplo Factura
                </div>

                <div className="card-body">
                       
                    <InvoceView id={id} nombre={nombre} />

                    <div className="row my-3">
                           
                        <InvoceDataClient cliente={cliente}/>
                            
                        <InvoceDataEmpresa empresa={ empresa } />

                    </div>

                    <ListItemsView items={items} handlerDeletedItem={handleDeletedItem}/>
                    
                    <TotalView total={total}/>

                    <FormItemsView  handler={ handleAddItems }/>
                </div> 

            </div>

        </div>

        
    );
}

export default InvoiceApp;