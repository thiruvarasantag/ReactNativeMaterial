import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import axios from 'axios';

const AxiosExample = () => {
  const [data, setData] = useState(null);
  const fetchDataWithAxios = () => {
    axios
      .get('https://api.github.com/users')
      .then(response => {
        console.log(response.data);
        setData(response.data);
        // Handle data
      })
      .catch(error => {
        console.error('There was a problem with the axios request:', error);
      });
  };

  useEffect(() => {
    fetchDataWithAxios();
  }, []);

  return (
    <View>
      <Text>Axios Example</Text>
      {data &&
        data.length &&
        data.map((item, idx) => {
          return (
            <View>
              <Text>Title: {item.login}</Text>
              <Text>Body: {item.type}</Text>
            </View>
          );
        })}
    </View>
  );
};

export default AxiosExample;
