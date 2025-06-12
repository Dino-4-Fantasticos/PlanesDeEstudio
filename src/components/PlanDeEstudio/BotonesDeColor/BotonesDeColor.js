import { useState, useContext } from 'react';
import { Col, Button } from 'react-bootstrap';

import ColorContext from '../../../context/colorContext';

import ModalColores from './ModalColores/ModalColores';
import BotonDeColor from './BotonDeColor/BotonDeColor';

/** Lista de colores que se pueden colocar en cada materia del plan de estudios **/
export default function BotonesDeColor({ cantMateriasPorColor, cantUnidadesPorColor }) {
  const { colores, colorSeleccionado, cambiarColorSeleccionado } = useContext(ColorContext);

  const [modalShow, setModalShow] = useState(false);

  const esconder = () => setModalShow(false);

  return (
    <>
      <Col xs={12} md={2} xl={1} className="mt-2 mb-2">
        <Button variant="info" className="w-100" onClick={() => setModalShow(true)}>
          Editar colores
        </Button>
        <ModalColores
          show={modalShow}
          onHide={esconder}
        />
      </Col>
      <Col className="colores-container mt-2 mb-2">
        {colores.map((color, indice) => (
          <BotonDeColor
            key={indice}
            indice={indice}
            color={color}
            cambiarColorSeleccionado={cambiarColorSeleccionado}
            colorSeleccionado={colorSeleccionado}
            cantMateriasPorColor={cantMateriasPorColor}
            cantUnidadesPorColor={cantUnidadesPorColor}
          />
        ))}
      </Col>
    </>
  )
}
