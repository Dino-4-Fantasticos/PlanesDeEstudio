import React, { createContext, useState, useCallback } from 'react';

const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
    const [colores, setColores] = useState(undefined);
    const [colorSeleccionado, setColorSeleccionado] = useState(1);

    const cambiarColores = useCallback((newColors) => {
        setColores(newColors);
    }, []);

    const cambiarColorSeleccionado = useCallback((newColor) => {
        setColorSeleccionado(newColor);
    }, [])

    const providerValue = {
        colores, colorSeleccionado, cambiarColores, cambiarColorSeleccionado
    }

    return (
        <ColorContext.Provider value={providerValue}>
            {children}
        </ColorContext.Provider>
    );
}

export default ColorContext;
