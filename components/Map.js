import { getCenter } from 'geolib';
import { useState } from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';

const Map = ({searchResults}) => {
    const [selectedLocation, setSelectedLocation] = useState({});
    
    const coordinates = searchResults.map(result => ({
        longitude: result.long,
        latitude: result.lat
    }));

    const center = getCenter(coordinates);

    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11
    });

    return (
        <ReactMapGL
            mapStyle='mapbox://styles/alan93/cksd71djc0g4n17sy1tojdn33'
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewport}
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >
            {
                searchResults.map(result => (
                    <div key={result.long}>
                        <Marker
                            longitude={result.long}
                            latitude={result.lat}
                            offsetLeft={-20}
                            offsetTop={-10}
                        >
                            <p 
                                role="img"
                                onClick={() => setSelectedLocation(result)} 
                                className="cursor-pointer text-2xl animate-bounce text-red-400"
                                aria-label="push-pin"
                            >
                                *
                            </p>
                        </Marker>
                        {
                            selectedLocation.long === result.long ? (
                                <Popup
                                    onClose={() => setSelectedLocation({})}
                                    closeOnClick={true}
                                    latitude={result.lat}
                                    longitude={result.long}
                                >
                                    {result.title}
                                </Popup>
                            ) : false
                        }
                    </div>
                ))
            }

        </ReactMapGL>
    )
}

export default Map
