import React from 'react';
import './App.css';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { data } from './data';
import TravelPanel from './TravelPanel';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      selectedTravel: null,
      center: {
        lat: 39.833333,
        lng: -98.583333
      }
    }
  }

  setTravel = (destination) => {
    this.setState(prevState => ({
      ...prevState,
      center: prevState.location,
      selectedTravel: destination
    }));
  }

  render() {
    return (
      <div className="App">
        <div id="dashboard">
          <div id="map-display">
            <LoadScript
              id="script-loader"
              googleMapsApiKey="AIzaSyCFgLIDxym8A2I5leKiPOLeaxWuRIApW1E"
            >
              <GoogleMap
                id='example-map'
                mapContainerStyle={{
                  width: '100%',
                  height: '100%'
                }}
                zoom={4}
                center={this.state.center}
              >
                {data.map(marker => {
                  return <Marker key={marker.name}
                    title={marker.name}
                    position={marker.location}
                    onClick={() => this.setTravel(marker)} />
                })}
              </GoogleMap>
            </LoadScript>
          </div>
          <div id="travel-panel">
            <TravelPanel selectedTravel={this.state.selectedTravel} />
          </div>
        </div>
      </div>
    );
  }

}