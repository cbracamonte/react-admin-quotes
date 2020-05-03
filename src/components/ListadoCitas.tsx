import React from 'react';
import PropTypes from 'prop-types';

const ListadoCitas = ({ cita, eliminarCita }) => {

    return (
        <div className="cita">
            <p>Mascota: <span>{cita.mascota}</span></p>
            <p>Dueño: <span>{cita.dueño}</span></p>
            <p>Fecha: <span>{cita.fecha}</span></p>
            <p>Hora: <span>{cita.hora}</span></p>
            <p>Sintomas: <span>{cita.sintomas}</span></p>
            <button
                type="button"
                className="button eliminar u-full-width"
                onClick={() => eliminarCita(cita.id)}>Eliminar &times;</button>
        </div>
    );
}

ListadoCitas.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}

export default ListadoCitas;