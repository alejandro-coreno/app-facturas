import { useState } from "react";

const FormItemsView = ({ handler }) => {
  // Estado para mostrar el formulario

  const [mostrarForm, setMostrarForm] = useState(false);

  // Ocupamos un solo objeto para cada valor del formulario
  const [valuesForm, setValuesForm] = useState({
    productValue: "",
    precioValue: "",
    cantidadValue: "",
  });

  const { productValue, precioValue, cantidadValue } = valuesForm;

  const handleChange = ({ target: { name, value } }) => {
    // Traemos los valores anteriores y en el la propiedad name modifica el valor de cada uno
    setValuesForm({ ...valuesForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Funcion isNaN -> Verifica que sea un numero en la expresion

    if (precioValue.trim().length <= 1) return;
    if (precioValue.trim().length <= 1) return;
    if (isNaN(precioValue.trim())) return;
    if (cantidadValue.trim().length < 1) return;
    if (isNaN(cantidadValue.trim())) {
      alert("Error:: Cantidad no es un numero");
      return;
    }

    handler(valuesForm);

    setValuesForm({
      productValue: "",
      precioValue: "",
      cantidadValue: "",
    });
  };

  return (
    <>
        <button
            className="btn btn-primary m-3"
            onClick={() => setMostrarForm(!mostrarForm)}
        >
            {mostrarForm ? "Ocultar Formulario" : "Mostrar Formulario"}
        </button>

            {  mostrarForm && 

                <form className="w-50" onSubmit={handleSubmit}>
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
                    onChange={handleChange}
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
                <button type="submit" className="btn btn-primary m-3">
                    Nuevo Item
                </button>
                </form>
        }
    </>
  );
};

export default FormItemsView;
