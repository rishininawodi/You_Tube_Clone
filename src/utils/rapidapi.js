import axios from "axios";

const BASE_URL ="https://youtube138.p.rapidapi.com";

const options = {

	headers: {
		'x-rapidapi-key': "2d0f6d2061msh87bdfea58c7920cp1d0097jsnde30c5aad451",
		'x-rapidapi-host': 'youtube138.p.rapidapi.com'
	}
};
export const fetchData = async(url)=>{ 
   try {
      const {data} =await axios.get(`${BASE_URL}/${url}`,options);
      return data;
   }
   catch(error)
    {
        console.error("error fetching api data: " ,error);
        throw error;
    }
};