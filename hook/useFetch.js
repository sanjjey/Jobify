import {useState,useEffect} from 'react';
import axios from 'axios';


const useFetch = (endpoint,query) =>{
    const [data,setData] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(null);
    const options = {
  method: 'GET',
  url: `https://jsearch.p.rapidapi.com/${endpoint}`,
  params: {...query,
    page: '1',
    num_pages: '1',
    country: 'in',
    date_posted: 'all'
  },
  headers: {
    'x-rapidapi-key': '465d4b2e36mshf10d5f3ec9f98f3p197266jsnee7609a83e87',
    'x-rapidapi-host': 'jsearch.p.rapidapi.com'
  }
};
    const fetchData = async () => {
        setIsLoading(true);

        try {
            const res = await axios.request(options);
            setData(res.data.data)



        }
        catch (error){
            setError(error)
            console.error(error)
        }
        finally{
            setIsLoading(false);

        }
    }
    useEffect(()=>{
        fetchData();
    }, []);
    const refetch = () =>{
        setIsLoading(true)
        fetchData();

    }
    return { data,isLoading,error,refetch};
}
export default useFetch;