import React, { useContext } from 'react';
import { Row, Col } from 'react-bootstrap';

import ColorContext from '../../../../context/colorContext';
import PlanContext from '../../../../context/planContext';

/** Bloque de una materia individual **/
export default function Materia ({ nums, materia }) {
  const { colores: listaColores, colorSeleccionado } = useContext(ColorContext);
  const { planDeEstudios, clickMateria } = useContext(PlanContext);

  const { esTec21 } = planDeEstudios;

  const {numSemestre, numMateria} = nums;

  const handleMateriaClick = () => {
    clickMateria(numSemestre, numMateria, colorSeleccionado);
  }

  return (
    <div className="materia" style={{backgroundColor: listaColores[materia.color]?.color ?? '#BF7913'}} onClick={handleMateriaClick}>
      <div className="labelMateria">
        <div className="nombre-materia">
          <label className="m-0">{materia.nombre}</label>
        </div>
        <label className="unidades d-block m-0">
          Unidades: {materia.unidades}
        </label>
      </div>
      {esTec21 && (
        <Row className="tec21 p-0 m-0 w-100">
          <Col className={`bloque-tec21 ${(materia?.periodos?.[0] || false) ? 'activo bg-white' : 'no-activo'} p-0 m-0`}></Col>
          <Col className={`bloque-tec21 ${(materia?.periodos?.[1] || false) ? 'activo bg-white' : 'no-activo'} p-0 m-0`}></Col>
          <Col className={`bloque-tec21 ${(materia?.periodos?.[2] || false) ? 'activo bg-white' : 'no-activo'} p-0 m-0`}></Col>
        </Row>
      )}
    </div>
  )
}
