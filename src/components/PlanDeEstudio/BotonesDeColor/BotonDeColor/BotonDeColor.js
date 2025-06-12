import { Row, Col } from 'react-bootstrap';

/** Boton individual de la lista de colores **/
const BotonDeColor = ({ indice, color, cambiarColorSeleccionado, colorSeleccionado, cantMateriasPorColor, cantUnidadesPorColor }) => {
    return (
        <div
            className={`text-center m-1 boton-color ${(indice === colorSeleccionado) ? 'seleccionado' : ''}`}
            style={{backgroundColor: color.color}}
            onClick={() => cambiarColorSeleccionado(indice)}
        >
            <Row>
                <Col style={{ whiteSpace: "nowrap" }}>
                    <b>{color.nombre}</b>
                </Col>        
            </Row>
            <Row>
                <Col style={{ whiteSpace: "nowrap" }}>
                    {`Unidades: ${cantUnidadesPorColor[indice]}`}
                </Col>        
            </Row>
            <Row>
                <Col style={{ whiteSpace: "nowrap" }}>
                    {`Materias: ${cantMateriasPorColor[indice]}`}
                </Col>        
            </Row>
        </div>
    )
}

export default BotonDeColor;
