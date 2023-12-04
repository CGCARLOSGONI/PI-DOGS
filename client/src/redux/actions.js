import { GET_ALL_DOGS } from "./actions.type";
import axios from 'axios';

const apiKey='live_ RaSX1RCymG95dJpIy51A6xoED26JiP 4TIeFnzfwm6ME0AgGVgBdvIdyY5XzJ FwZk'
const URL_BASE = `https://api.thedogapi.com/v1/breeds/?api_key=${apiKey}`

export const getAllDogs = () => {
    return async (dispatch) => {
     try {
        const { data } = await axios(URL_BASE);
        return dispatch({ 
            type: GET_ALL_DOGS, 
            payload: data })
        
     } catch (error) {
       console.log(error);
     }

    }
}