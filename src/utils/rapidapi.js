import axios from "axios";

const BASE_URL ="https://youtube138.p.rapidapi.com";

const options = {

	headers: {
		'x-rapidapi-key': '60a562c60cmshb8e8f8ae7acbbefp1e41c0jsn6e5ea1142c85',
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