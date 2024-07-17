import { useState } from "react";
import { getFacturas } from "./services/getFacturas";
import InvoceView from "./components/InvoiceView";
import InvoceDataClient from "./components/InvoiceDataClient";
import InvoceDataEmpresa from "./components/InvoceDataEmpresa";
import ListItemsView from "./components/ListItemsView";
import TotalView from "./components/TotalView";

const InvoiceApp = () => {

    //obtenemos el objeto facturas que retorna la funcion
    const {nombre, id, empresa, cliente, items: itemsInicial, total} = getFacturas();

    const [ productValue, setProductValue ] = useState('');
    const [ precioValue, setPrecioValue] = useState('');
    const [ cantidadValue, setCantidadValue] = useState('');
    
    // Contador para el id de manera dinamica 
    const [ counter , setCounter ] = useState(4);

    // Guardamos el estado de los items iniciales para poder agregar nuevos
    const [items , setItems] = useState(itemsInicial);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        //Funcion isNaN -> Verifica que sea un numero en la expresion

        if(precioValue.trim().length <=1 ) return;
        if(precioValue.trim().length <=1) return;
        if(isNaN(precioValue.trim())) return;
        if(cantidadValue.trim().length < 1) return;
        if(isNaN(cantidadValue.trim())) {
            alert('Error:: Cantidad no es un numero');
            return;   
        }

        setItems([...items, {
            id: counter,
            producto: productValue.trim(), 
            precio: parseInt(precioValue.trim(), 10), 
            cantidad: +cantidadValue.trim() 
        }]); 
        
        setProductValue('');
        setPrecioValue('');
        setCantidadValue('');
        setCounter( counter + 1 );
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

                    <ListItemsView items={items} />
                    
                    <TotalView total={total}/>

                    <form className="w-50" onSubmit={ e => handleSubmit(e)}>
                        <input 
                            type="text" 
                            name="producto" 
                            id="producto" 
                            placeholder="Producto"
                            className="form-control m-3"
                            value={productValue}
                            onChange={e => setProductValue(e.target.value) }
                        />

                        <input 
                            type="text" 
                            name="precio" 
                            id="precio" 
                            placeholder="Precio"
                            className="form-control m-3"
                            value={precioValue}
                            onChange={ e => setPrecioValue(e.target.value)}
                        />

                        <input 
                            type="text" 
                            name="cantidad" 
                            id="cantidad" 
                            placeholder="Cantidad"
                            className="form-control m-3"
                            onChange={e => setCantidadValue(e.target.value)}
                            value={cantidadValue}
                        />
                        <button type="submit" className="btn btn-primary m-3">Nuevo Item</button>
                    </form>
                </div> 

            </div>

        </div>

        
    )
}

export default InvoiceApp;