import React, { Fragment, useState } from 'react';
import { v4 as uuid_v4 } from "uuid";
import PropTypes from 'prop-types';

const Formulario = ({ crearCita }) => {
    // Crear State de Citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        dueño: '',
        fecha: '',
        hora: '',
        sintomas: '',
        id: 0
    });

    const [error, actualizarError] = useState(false);

    // Funcion que se ejecuta cada vez que el usuario escribe en un input
    const actualizarState = (event: any) => {
        actualizarCita(
            {
                ...cita,
                [event.target.name]: event.target.value
            }
        )
    }

    // Extraer valores
    const { mascota, dueño, fecha, hora, sintomas } = cita;

    //Enviar Formulario

    const enviarCita = event => {
        event.preventDefault();

        // Validar 
        if (mascota.trim() === '' || dueño.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
            actualizarError(true);
            return;
        }

        // Eliminar Mensaje del Error
        actualizarError(false);

        // Asignar un Id - En react se requiere un Key para datos repetidos
        cita.id = uuid_v4();

        // Crear la Cita
        crearCita(cita);

        // Resetear el form
        actualizarCita({
            mascota: '',
            dueño: '',
            fecha: '',
            hora: '',
            sintomas: '',
            id: 0
        });
    }

    return (
        <Fragment>
            <h2>Crear Cita</h2>
            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}
            <form onSubmit={enviarCita}>
                <fieldset>
                    <legend>Datos de la Mascota</legend>
                    <div>
                        <label>Nombre de la Mascota</label>
                        <input
                            type="text"
                            name="mascota"
                            className="u-full-width"
                            placeholder="Laica"
                            onChange={actualizarState}
                            value={mascota}
                        />
                        <label>Nombre del Dueño</label>
                        <input
                            type="text"
                            name="dueño"
                            className="u-full-width"
                            placeholder="Hernan"
                            onChange={actualizarState}
                            value={dueño}
                        />
                        <label>Fecha</label>
                        <input
                            type="date"
                            name="fecha"
                            className="u-full-width"
                            onChange={actualizarState}
                            value={fecha}
                        />
                        <label>Hora</label>
                        <input
                            type="time"
                            name="hora"
                            className="u-full-width"
                            onChange={actualizarState}
                            value={hora}
                        />
                        <label>Sintomas</label>
                        <textarea
                            name="sintomas"
                            className="u-full-width"
                            onChange={actualizarState}
                            value={sintomas}
                        ></textarea>
                        <button
                            type="submit"
                            className="u-full-width button-primary"
                        >
                            Agregar Cita
                        </button>
                    </div>
                </fieldset>
            </form>
        </Fragment>
    );
}

// Documentar el componente
Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}

export default Formulario;