import axios from 'axios';

const fetchData = async (url: any) => {
    const apiData = await axios.get(url);
    return apiData.data;
}

export default fetchData

