import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';

const LazyLoadedImage = React.lazy(() => import('./LazyLoadedImage'));

const MyComponent = () => {
  const [showLazyImage, setShowLazyImage] = useState(false);

  useEffect(() => {
    // Load the lazy image after a delay
    setTimeout(() => {
      setShowLazyImage(true);
    }, 2000);
  }, []);

  return (
    <View>
      <Text>My Component</Text>
      {showLazyImage && (
        <React.Suspense fallback={<Text>Loading...</Text>}>
          <LazyLoadedImage />
        </React.Suspense>
      )}
    </View>
  );
};

export default MyComponent;
