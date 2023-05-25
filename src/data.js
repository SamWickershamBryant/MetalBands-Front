import axios from 'axios'
const url = 'https://cyzy36l9vd.execute-api.us-east-2.amazonaws.com/api'

export async function fetchData(){
    try {
    const response = await axios.get(url + '/metalbands');
    return {'status':'ok','data':response.data};
  } catch (error) {
    return {'status':'error','data':error};
  }
}