import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
// ...

export class MapContainer extends React.Component {

  render() {
    const style = {
        width: '300px',
        height: '300px',
        borderRadius: '20px',
        border: "solid 10px #7daaf3"
      }
    return (
      <Map google={this.props.google} zoom={14} style={style} initialCenter={{lat: 44.71562073515013, lng: -93.24792898688428}}>
        <Marker onClick={this.onMarkerClick} name={"Current location"} />

        <InfoWindow onClose={this.onInfoWindowClose}>
          
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("")
})(MapContainer);
