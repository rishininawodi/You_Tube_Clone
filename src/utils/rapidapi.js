const API_KEY =import.meta.env.VITE_YOUTUBE_API_KEY
const BASE_URL ="https//"

const options = {
	method: 'GET',
	hostname: '',
	
	headers: {
		'x-rapidapi-key': API_KEY,
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
}