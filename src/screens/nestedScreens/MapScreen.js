import MapView, { Marker } from "react-native-maps";
import { MainContainer } from "../../components/MainContainer";

export const MapScreen = ({ route: { params } }) => {
  const {
    location: { latitude, longitude },
    title,
  } = params;

  return (
    <MainContainer>
      {location && (
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          mapType="standard"
          minZoomLevel={15}
        >
          <Marker
            title={title}
            coordinate={{
              latitude,
              longitude,
            }}
          />
        </MapView>
      )}
    </MainContainer>
  );
};
