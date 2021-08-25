
import * as React from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';

export default function Mapbox(props) {
  // console.log(props, '----------features');
  const [viewport, setViewport] = React.useState({
    longitude: -122.45,
    latitude: 37.78,
    zoom: 14
  });
 
  // Only rerender markers if props.data has changed
  const markers = React.useMemo(() => props.data.map(
    city => (
      city.geometry.coordinates[0][0].length == 2 &&
        <Marker 
        key={city.properties.diss_me}
        longitude={Number(city.geometry.coordinates[0][0][0])}
          latitude={Number(city.geometry.coordinates[0][0][1])}
          offsetTop={-20}
          offsetLeft={-10}
          draggable
          
          >
            {console.log(city.properties.diss_me, city.geometry.coordinates[0][0][0], city.geometry.coordinates[0][0][1])}
          <img style={{width:"20px", height:"20px"}} src="https://trainnorth.ca/wp-content/uploads/02-F-Northlands-About-OurCampuses-pin.png" />
        </Marker>
      

     
    )
  ), [props.data]);

  return (
    <ReactMapGL 
    mapboxApiAccessToken="pk.eyJ1IjoiYWxhbWluMjUiLCJhIjoiY2tzcWtoZHhrMGRmODMyb2RwZzAybnQ0bCJ9.A_AQ274MkFwyWmdTw5sI3Q"
    {...viewport} width="100vw" height="100vh" onViewportChange={setViewport}>
      
      {markers}
    </ReactMapGL>
  );
}


