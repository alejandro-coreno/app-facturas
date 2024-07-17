import { useState } from "react";
import { getFacturas } from "../services/getFacturas";
import InvoceView from "./InvoiceView";
import InvoceDataClient from "./InvoiceDataClient";
import InvoceDataEmpresa from "./InvoceDataEmpresa";
import ListItemsView from "./ListItemsView";

const InvoiceApp = () => {

    //obtenemos el objeto facturas que retorna la funcion
    const {nombre, id, empresa, cliente, items} = getFacturas();

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

                </div> 

            </div>

        </div>

        
    )
}

export default InvoiceApp;