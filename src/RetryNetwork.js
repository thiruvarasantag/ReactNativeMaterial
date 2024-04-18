import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get('https://api.example.com/data');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    // Retry after 5 seconds
    await new Promise(resolve => setTimeout(resolve, 5000));
    return fetchData(); // Retry the request
  }
};
