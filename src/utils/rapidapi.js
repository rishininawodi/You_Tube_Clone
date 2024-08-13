import axios from "axios";

const BASE_URL ="https://youtube138.p.rapidapi.com";

const options = {

	headers: {
		'x-rapidapi-key': "46f59200d6msh34625441544f7edp135d5cjsn4311b724e78d",
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