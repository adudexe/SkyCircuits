import axios from 'axios';


const axiosInstance = axios.create({
    baseURL:'', //Provide backend Url
    headers:{
        'Content-Type':'application/json',
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if(token){
            config.headers.Autorization = `Bearer ${token}`;
        }
        return config
    },

    (error) => Promise.reject(error)
);



axiosInstance.interceptors.response.use(
    (res) => res,
    (err) => {
        if(err.response && err.response.status == 401){
            localStorage.removeItem('token');
            window.location.href = '/login';
        }
        return Promise.reject(err);
    }
)

export default axiosInstance