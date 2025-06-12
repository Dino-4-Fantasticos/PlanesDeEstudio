import React, { createContext, useState } from 'react';

const emptyPlan = {
    _id: "",
    siglas: "",
    nombre: "",
    esVigente: false,
    esTec21: false,
    materias: []
}

const PlanContext = createContext(emptyPlan);

export const PlanProvider = ({ children }) => {
    const [planDeEstudios, setPlan] = useState(emptyPlan);

    const loadPlan = (planInfo) => {
        setPlan(planInfo);
    }

    const clearPlan = () => {
        setPlan(emptyPlan);
    }

    const clickMateria = (sem, materia, colorSeleccionado) => {
        let newPlan = JSON.parse(JSON.stringify(planDeEstudios));
        newPlan.materias[sem][materia].color = colorSeleccionado;
        setPlan(newPlan);
    }

    const clickSemestre = (sem, colorSeleccionado) => {
        let newPlan = JSON.parse(JSON.stringify(planDeEstudios));
        newPlan.materias[sem].forEach(materia => materia.color = colorSeleccionado);
        setPlan(newPlan);
    }

    const providerValue = {
        planDeEstudios, loadPlan, clearPlan, clickMateria, clickSemestre
    }

    return (
        <PlanContext.Provider value={providerValue}>
            {children}
        </PlanContext.Provider>
    );
}

export default PlanContext;
