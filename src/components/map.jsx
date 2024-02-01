import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: -6.986794,
  lng: 110.413727,
};

function MapGoogle() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBNpXgBWAVR5KVlBvkawCkhPJFJr9eqAoo">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default MapGoogle;
