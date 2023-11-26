import axios from "axios";

const BASE_API = 'http://localhost:5000/api/v1';

export const addStudent = async (formData) => {
    let result;
    try {
        const data = await axios.post(`${BASE_API}/addStudent`, formData);
        result = {status: "success", data: data}
    } catch (e) {
        result = {status: "error", data: e.message};
    }
    return result;
}

export const updateStudent = async (id, formData) => {
    let result;
    try {
        const data = await axios.post(`${BASE_API}/addStudent/${id}`, formData);
        result = {status: "success", data: data}
    } catch (e) {
        result = {status: "error", data: e.message};
    }
    return result;
}

export const getStudents = async () => {
    let result;
    try {
        result = await axios.get(`${BASE_API}/allStudents`)
    } catch (e) {
        result = {status: "error", data: e.message};
    }
    return result;
}

export const getStudentByID = async (id) => {
    let result;
    try {
        result = await axios.get(`${BASE_API}/allStudents/${id}`);
    } catch (e) {
        result = {status: "error", data: e.message};
    }
    return result;
}

export const deleteStudent = async (id) => {
    let result;
    try {
        const data = await axios.get(`${BASE_API}/deleteStudent/${id}`);
        result = {status: "success", data: data}
    } catch (e) {
        result = {status: "error", data: e.message};
    }
    return result;
}