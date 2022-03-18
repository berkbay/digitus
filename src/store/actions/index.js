import axios from "axios";

export const getApi = () => dispacth =>{
  axios.get(`https://api.github.com/search/repositories?q={javascript}{&page,per_page,sort,order}`)
    .then((res) => {
      dispacth({type: 'GET_API_SUCCESS', payload: res.data})
    })
    .catch(error => {
      dispacth({type: 'GET_ERROR', payload: error.response.data.message})
    })
}

