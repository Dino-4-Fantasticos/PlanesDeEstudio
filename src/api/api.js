import axios from "axios";
import { UPDATE_PLANIFICADO_URL, GET_PLAN_URL, CREATE_PLANIFICADO_URL } from '../constants/apiConstants'

export function createPlanificado(clave, body) {
    return axios.post(CREATE_PLANIFICADO_URL.replace(":clave", clave), body)
}

export function updatePlanificado(planId, plan) {
    return axios.put(UPDATE_PLANIFICADO_URL.replace(':planId', planId), plan)
        .then(res => res.data);
}

export function getPlan(clave) {
    return axios.get(GET_PLAN_URL.replace(':clave', clave))
}