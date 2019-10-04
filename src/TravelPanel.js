import React from 'react';
import Gallery from 'react-photo-gallery';

const renderTravel = (destination) => {
    return (
        <div>
            <h2>{destination.name}</h2>
            <p>{destination.blurb}</p>
            <p><strong>Dates:</strong> <span>{(new Date(destination.date.start)).toLocaleDateString()}</span> - <span>{(new Date(destination.date.end)).toLocaleDateString()}</span></p>
            <div id="photo-panel">
                <h3>Photos</h3>
                <Gallery id="photos" photos={destination.photos}></Gallery>
            </div>
        </div>
    );
}

export default function TravelPanel (props) {
    const { selectedTravel } = props;
    return (
        <div>
            <h1>my travels</h1>
            <div>
                {selectedTravel ? renderTravel(selectedTravel) : <div>No destination selected.</div>}
            </div>
        </div>
    );
};