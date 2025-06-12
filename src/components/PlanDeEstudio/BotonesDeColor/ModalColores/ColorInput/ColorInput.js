import { Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import { SliderPicker as Picker} from 'react-color';

/** Input para cambiar el valor hexadecimal y el tag de un color **/
function ColorInput({ color, actualizarNombre, actualizarColor, borrarColor, indice }) {
    return (
        <Row className="mt-5 mb-3">
            <Col xs={5}>
                <Picker
                    color={ color.color }
                    onChange={(c) => actualizarColor(c.hex, indice) }
                />
            </Col>
            <Col xs={5}>
                <InputGroup>
                    <FormControl
                        placeholder="Tag Color"
                        value={color.nombre}
                        onChange={(e) => actualizarNombre(indice, e.target.value)}
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
            </Col>
            <Col xs={1}>
                <Button variant="danger" onClick={() => borrarColor(color)}> Borrar </Button>
            </Col>
        </Row>
    )
}

export default ColorInput;
