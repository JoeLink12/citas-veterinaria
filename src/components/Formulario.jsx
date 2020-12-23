import React, {Fragment} from 'react';

const Formulario = () => {
    return ( 
        <Fragment>
            <h2>Crear cita</h2>
            <form action="">
                <label>Nombre de la mascota</label>
                <input 
                    type="text" 
                    name="mascota" 
                    placeholder="Nombre mascota"
                    className="u-full-width"
                />
                <label>Nombre del dueño</label>
                <input 
                    type="text" 
                    name="propietario" 
                    placeholder="Nombre dueño"
                    className="u-full-width"
                />
                <label>Fecha</label>
                <input 
                    type="date" 
                    name="fecha" 
                    className="u-full-width"
                />
                <label>Hora</label>
                <input 
                    type="time" 
                    name="hora" 
                    className="u-full-width"
                />
                <label>Síntomas</label>
                <textarea name="sintomas" className="u-full-width"></textarea>
                <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
            </form>
        </Fragment>
     );
}
 
export default Formulario;