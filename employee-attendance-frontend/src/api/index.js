import axios from 'axios'

const token = localStorage.getItem('token')

const baseURL = 'http://127.0.0.1:8000/api/employee'

axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

export function getData (url, params) {
    url = baseURL + url
    let result = axios.get(url, params)
        .then(response => response.data)
        .catch((error) => {throw error}) 
    return result;
}

export function postData(url, data) {
    url = baseURL + url
    return axios.post(url, data)
        .then(response => response.data)
        .catch((error) => { throw error })
}

export function deleteData(url, data) {
    url = baseURL + url
    let result = axios.delete(url, data)
            .then(response => response.data)
            .catch((error) => { throw error })
    return result;
}

export function putData(url, data) {
    url = baseURL + url
    let result = axios.put(url, data)
                    .then (response => response.data)
                    .catch((error) => {throw error})
    return result;
}