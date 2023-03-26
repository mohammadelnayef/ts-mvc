import axios from 'axios';

const fetchData = async (url) => {
    const apiData = await axios.get(url);
    return apiData.data;
}

export default fetchData

