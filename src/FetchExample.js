import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';

const FetchExample = () => {
  const [data, setData] = useState(null);

  const fetchDataWithFetch = () => {
    fetch('https://api.github.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        setData(data);
        // Handle data
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  };


  useEffect(() => {
    fetchDataWithFetch();
  }, []);

  return (
    <View>
      <Text>Fetch Example</Text>
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

export default FetchExample;
