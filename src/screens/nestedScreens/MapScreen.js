import { MainContainer } from "../../components/MainContainer";
import MapView, { Marker } from "react-native-maps";
import { useEffect, useState } from "react";

export const MapScreen = ({ route: { params } }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (params) setData((prevState) => [...prevState, params]);
  }, [params]);

  console.log("data", data);

  return (
    <MainContainer>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 49.4289585,
          longitude: 11.0453714,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType="standard"
        minZoomLevel={15}
        onMapReady={() => console.log("Map is ready")}
      >
        <Marker
          title="title"
          coordinate={{ latitude: 49.4289585, longitude: 11.0453714 }}
        />
      </MapView>
    </MainContainer>
  );
};
