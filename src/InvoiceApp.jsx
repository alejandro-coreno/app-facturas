import { useState } from "react";
import { getFacturas } from "./services/getFacturas";
import InvoceView from "./components/InvoiceView";
import InvoceDataClient from "./components/InvoiceDataClient";
import InvoceDataEmpresa from "./components/InvoceDataEmpresa";
import ListItemsView from "./components/ListItemsView";
import TotalView from "./components/TotalView";

const InvoiceApp = () => {

    //obtenemos el objeto facturas que retorna la funcion
    const {nombre, id, empresa, cliente, items, total} = getFacturas();

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
                </div> 

            </div>

        </div>

        
    )
}

export default InvoiceApp;