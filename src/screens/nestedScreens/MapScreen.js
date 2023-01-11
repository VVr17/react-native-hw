import { MainContainer } from "../../components/MainContainer";
import MapView, { Marker } from "react-native-maps";
import { useEffect, useState } from "react";

export const MapScreen = ({ route: { params } }) => {
  const [{ location, title }, setLocation] = useState([]);

  useEffect(() => {
    if (params) setLocation(params);
  }, [params]);

  return (
    <MainContainer>
      {location && (
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          mapType="standard"
          minZoomLevel={15}
        >
          <Marker
            title={title}
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
          />
        </MapView>
      )}
    </MainContainer>
  );
};
