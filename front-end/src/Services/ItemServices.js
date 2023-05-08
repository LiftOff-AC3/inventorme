import axios from 'axios';

const BASE_URL = "http://http://localhost:8080/";

class ItemService {
    getAllItems(){
        return axios.get('$BASE_URL)/items);
    }
}