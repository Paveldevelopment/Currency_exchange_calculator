import React from 'react'
import {useQuery} from "@tanstack/react-query"
import Axios from 'axios';


export const useFetch = (url: string) => {
    
    // Fetch data
    const { data } = useQuery(['get'], () => {
        return Axios.get(url).then((res) => res.data)
      });
    
     

    return  data
}

 