import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Contacto = () => {

    // Lista contactos por defecto
    const [agenda, setAgenda] = useState(['Juan','María','Javier']);

    // Estado de los contactos
    const [estado, setEstado] = useState(false);

    // Mostrar contactos
    const mostrarContactos = agenda.map( contacto => (
        <div>
            <h1 className='mb-5 border border-info' style={{width: '400px', margin: '0 auto', marginTop: '20px'}}><i className="bi bi-person" style={{color: 'green'}}></i> Contacto: { contacto } <i onClick={eliminarContacto} className="bi bi-trash" id='remove' style={{cursor: 'pointer', color: 'red', fontSize: '20px'}}></i></h1>

        </div>
    ))

    // Cambiar estado
    function cambiarEstado() {
        setEstado(!estado);
    }

    // Añadir contacto nuevo
    function crearContacto(e) {
        e.preventDefault();
        const input = document.querySelector('#name').value;
        const nuevaAgenda = [...agenda, input];
        setAgenda(nuevaAgenda)
    }

    // Eliminar contacto de la agenda
    function eliminarContacto(index) {
        const agendaRemove = [...agenda];
        agendaRemove.splice(index, 1)

        return setAgenda(agendaRemove)
        
    }


    return (
        <div>
            <h1>Mi estado: { estado ? 'En Línea' : 'Offline' } </h1>
            <button onClick={cambiarEstado} className='btn btn-primary'>On / Off</button>
            
            { mostrarContactos }
            <form onSubmit={crearContacto} style={{display: 'flex', margin: '0 auto', flexDirection: 'column', width:'200px'}}>
                <input className='mb-3' type='text' placeholder='Nuevo contacto' id='name' />
                <button className='btn btn-info' type='submit'>Agregar Contacto</button>
            </form>
            
        </div>
    );
}

export default Contacto;
