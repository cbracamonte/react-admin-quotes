import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario'
import ListadoCitas from './components/ListadoCitas'

function App() {
  let citasEnLocalStorage = JSON.parse(localStorage.getItem('citas'));
  if (!citasEnLocalStorage) {
    citasEnLocalStorage = []
  }
  // Listado de Citas
  const [citas, guardarCitas] = useState(citasEnLocalStorage);

  // Hook UseEffect, es un hook para escuchar eventos del state, recibe un callback y el state al que se va a estar escuchando sus cambios.
  useEffect(() => {
    let citasEnLocalStorage = JSON.parse(localStorage.getItem('citas'));

    if (citasEnLocalStorage) {
      localStorage.setItem('citas', JSON.stringify(citas));
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas])
  // Agregar Citas

  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ]);
  }

  const eliminarCita = id => {
    const citaSeleccionada = citas.filter(cita => cita.id !== id);
    guardarCitas(citaSeleccionada)
  }

  return (
    <Fragment >
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={crearCita} />
          </div>
          <div className="one-half column">
            {citas.length !== 0 ?
              <h2>Citas Registradas</h2>
              : null
            }
            {citas.map(cita => (
              <ListadoCitas
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
