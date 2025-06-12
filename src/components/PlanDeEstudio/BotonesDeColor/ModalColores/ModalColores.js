import React, { useState, useEffect, useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';

import ColorContext from '../../../../context/colorContext';

import ColorInput from './ColorInput/ColorInput';

/** Modal donde puedes ver la lista de todos los colores y modificarlos **/
function ModalColores({ show, onHide }) {
    const { colores, cambiarColores } = useContext(ColorContext);

    const [listaColores, setListaColores] = useState(colores);

    const guardarColores = () => {
        cambiarColores(listaColores);
        onHide();
    }

    const actualizarNombre = (color, tag) => {
        let cols = JSON.parse(JSON.stringify(listaColores));
        cols[color].nombre = tag;
        setListaColores(cols);
    }

    const actualizarColor = (color, indice) => {
        let cols = JSON.parse(JSON.stringify(listaColores));
        cols[indice].color = color;
        setListaColores(cols);
    }

    const cerrarModal = () => {
        setListaColores(colores);
        onHide();
    }

    const crearColor = () => {
        const color = {
            color: '#439630',
            nombre: 'Color Nuevo'
        }

        let cols = JSON.parse(JSON.stringify(listaColores));
        cols.push(color);
        setListaColores(cols);
    }

    const borrarColor = (color) => {
        setListaColores(listaColores.filter(col => col !== color));
    }

    useEffect(() => {
        setListaColores(colores);
    }, [colores])

    return (
        <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header className="modal-bg">
                <Modal.Title id="contained-modal-title-vcenter">
                    Colores
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-bg">
                <div>
                    {listaColores.map((color, index) => (
                        <ColorInput
                            key={index}
                            color={color}
                            actualizarNombre={actualizarNombre}
                            actualizarColor={actualizarColor}
                            indice={index}
                            borrarColor={borrarColor}
                        />
                    ))}
                <Button variant="info" onClick={crearColor}>Agregar Color</Button>
                </div>
            </Modal.Body>
            <Modal.Footer className="modal-bg">
                <Button variant="danger" onClick={cerrarModal}>Cerrar</Button>
                <Button onClick={guardarColores}>Guardar</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalColores;
