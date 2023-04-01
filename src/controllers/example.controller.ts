import fetchData from '../models/example.model';
import processData from '../services/process-data.service';
const path: string = 'https://jsonplaceholder.typicode.com/users';
const getProcessedData = async (req: any, res: any) => {
    const apiData = await fetchData(path);
    const result = processData(apiData);
    res.json(result);
}

export default {getProcessedData}
