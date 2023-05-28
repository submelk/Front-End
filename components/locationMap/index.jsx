import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const LocationMap = () => {
  return (
    <MapContainer
      center={[48.181659, 16.358814]}
      zoom={18}
      scrollWheelZoom={false}
      className="h-full w-full"
      zoomControl={false}
    >
      <TileLayer
        //   attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
        subdomains={["mt0", "mt1", "mt2", "mt3"]}
      />
      {/* <Marker position={[35.790870, 51.433945]}>
<Popup>
A pretty CSS3 popup. <br /> Easily customizable.
</Popup>
</Marker> */}
    </MapContainer>
  );
};

export default LocationMap;
