import { BACKEND_URL } from '../components/utils'; 

export const CREATE_PLANIFICADO_URL = `${BACKEND_URL}/planificados/crearPlanificadoBase/:clave`
export const UPDATE_PLANIFICADO_URL= `${BACKEND_URL}/planificados/:planId`;

export const GET_PLAN_URL = `${BACKEND_URL}/planes/:clave`;
export const GET_PLANES_URL = `${BACKEND_URL}/planes`;

