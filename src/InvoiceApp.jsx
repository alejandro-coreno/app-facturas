import { useEffect, useState } from "react";
import { getFacturas, calcularItems } from "./services/getFacturas";
import InvoceView from "./components/InvoiceView";
import InvoceDataClient from "./components/InvoiceDataClient";
import InvoceDataEmpresa from "./components/InvoceDataEmpresa";
import ListItemsView from "./components/ListItemsView";
import TotalView from "./components/TotalView";


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
    
    // Ocupamos un solo objeto para cada valor del formulario
    const [valuesForm, setValuesForm] = useState({
        productValue: '',
        precioValue: '',
        cantidadValue: ''
    });
    
    const { productValue , precioValue, cantidadValue} = valuesForm;
    
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


    const handleChange = ({ target : { name, value}}) => {
        
        // Traemos los valores anteriores y en el la propiedad name modifica el valor de cada uno
        setValuesForm({...valuesForm, 
            [ name ]: value
        });       
    }   

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

        setValuesForm({
            productValue: '',
            precioValue: '',
            cantidadValue: ''
        })
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

                    <form className="w-50" onSubmit={ handleSubmit }>
                        <input 
                            type="text" 
                            name="productValue" 
                            id="producto" 
                            placeholder="Producto"
                            className="form-control m-3"
                            value={productValue}
                            onChange={handleChange}
                        />

                        <input 
                            type="text" 
                            name="precioValue" 
                            id="precio" 
                            placeholder="Precio"
                            className="form-control m-3"
                            value={precioValue}
                            onChange={ handleChange }
                        />

                        <input 
                            type="text" 
                            name="cantidadValue" 
                            id="cantidad" 
                            placeholder="Cantidad"
                            className="form-control m-3"
                            onChange={handleChange}
                            value={cantidadValue}
                        />
                        <button type="submit" className="btn btn-primary m-3">Nuevo Item</button>
                    </form>
                </div> 

            </div>

        </div>

        
    );
}

export default InvoiceApp;