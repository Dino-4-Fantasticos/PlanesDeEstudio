import React, { useState, useEffect, useContext } from 'react';
import { Col } from 'react-bootstrap';

import ColorContext from '../../../context/colorContext';
import PlanContext from '../../../context/planContext';

import Materia from './Materia/Materia';

/** Lista de materias con bloque que define qué semestre es **/
export default function Semestre ({ numSemestre }) {
  const { colores: listaColores, colorSeleccionado } = useContext(ColorContext);
  const { planDeEstudios, clickSemestre } = useContext(PlanContext);
  const [colorDeFondo, setColorDeFondo] = useState(0);

  const { materias: semestre } = planDeEstudios;

  const materias = semestre[numSemestre]

  const botonClickeado = () => {
    clickSemestre(numSemestre, colorSeleccionado);
    setColorDeFondo(colorSeleccionado);
  }

  // Se actualiza el color del boton del semestre
  useEffect(() => {
    // Este if es para colorear el semestre de naranja por si alguna materia se pintó de otro color cuando todas estaban del mismo color
    if (colorDeFondo > 0) {
      materias.forEach(materia => {
        if (materia.color !== colorDeFondo) {
          setColorDeFondo(0);
          return;
        }
      });
    } 
    // Este else es para colorear el semestre del color de todas las materias cuando todas están del mismo color
    else {
      if (materias.length) {
        let color = materias[0].color;
        let cambiarColor = true;
  
        materias.forEach(materia => {
          if (materia.color !== color) {
            cambiarColor = false;
          }
        });
  
        if (cambiarColor) {
          setColorDeFondo(color);
        }
      }
    }
  }, [materias, colorDeFondo]);

  return (
    <Col xs={6} md={3} lg className="semestre p-0 pr-1 mb-4">
      <div className="semestre-label" style={{backgroundColor: listaColores[colorDeFondo]?.color || '#BF7913'}} onClick={() => botonClickeado()}>
        <label className="mb-1">Semestre {numSemestre + 1}</label>
      </div>
      {materias.map((materia, indice) => (
        <Materia
          key={indice}
          nums={{numSemestre, numMateria: indice}}
          materia={materia}
        />
      ))}
    </Col>
  )
}
