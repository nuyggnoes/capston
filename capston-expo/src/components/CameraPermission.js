import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Camera } from "expo-camera";

const CameraPermission = ({ children }) => {
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return <>{children}</>;
};

export default CameraPermission;
