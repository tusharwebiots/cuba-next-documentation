import React from 'react';
import CodeShowCaseBox from '../../component/CodeShowCaseBox';
import DemoButton from '../../component/DemoButton';
import Img from '../../component/Img';

const Maps = () => {
  const prismData = {
    installGoogle: `npm i react-google-maps`,
    unInstallGoogle: `npm uninstall react-google-maps`,
    usageGoogle: `import { withGoogleMap, GoogleMap, withScriptjs } from "react-google-maps";
const MapContainer = () => { 
  const[location,setlocation] = useState({ address: false,
    mapPosition: {
      lat: 18.5204, lng: 73.8567
      },
      markerPosition: {
      lat: 18.5204, lng: 73.8567
      }
  })

  const BasicMap = withScriptjs(
    withGoogleMap(
    props => (
      <GoogleMap google={props.google}
      defaultZoom={15}
      defaultCenter={{ lat: location.mapPosition.lat, lng: location.mapPosition.lng }}
      >
      </GoogleMap>
    )
    )
  );
 
  return (
      <CardBody>
      <BasicMap
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=Yourkey&libraries=places"
            loadingElement={
              <div style={{ height: \`100%\` }} />
            }
            containerElement={
              <div style={{ height: '300px' }} />
            }
            mapElement={
              <div style={{ height: \`100%\` }} />
            }
      />    
    </CardBody>
    )
}`,
    installLeaflet: `npm i react-leaflet`,
    unInstallLeaflet: `npm uninstall react-leaflet`,
    usageLeaflet: `import { Map as LeafletMap, TileLayer, GeoJSON, Marker, Popup } from 'react-leaflet';
import WorldData from 'world-map-geojson';
const LeafletMap = () => {
  return(
          <div id="gmap-simple" >
            <LeafletMap
                        center={[50, 10]}
                        zoom={6}
                        maxZoom={10}
                        attributionControl={true}
                        zoomControl={true}
                        doubleClickZoom={true}
                        scrollWheelZoom={true}
                        dragging={true}
                        animate={true}
                        easeLinearity={0.35}
                    >
            <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png' />
            <Marker position={[50, 10]}>
            <Popup>
                  Popup for any custom information.
            </Popup>
            </Marker>
            </LeafletMap>
          </div>
      )
}`,
  };
  return (
    <div className='row'>
      <div className='col-12'>
        <h1 className='main-title'>Maps</h1>

        <div>
          <h4 className='sub-title title-with-link' id='googleMap'>
            Google Map <DemoButton preview='https://cuba-nextjs.vercel.app/app/map/googlemap' official='https://www.npmjs.com/package/@react-google-maps/api' />
          </h4>
          <Img src='/assets/images/googleMap.gif' className='img-bordered w-100 mb-3' alt='' />
          <h5 className='inner-sub-title mt-2'>Installing and usage</h5>
          <CodeShowCaseBox code={prismData.installGoogle} />
          <CodeShowCaseBox code={prismData.usageGoogle} />
          <h5 className='inner-sub-title mt-2'>Remove package from project</h5>
          <CodeShowCaseBox code={prismData.unInstallGoogle} />
          <p>As you can see, it becomes very easy to create a table and even make it dynamic, you just have to provide and update the data in items object, and bootstrap-vue will create the table fields and rows automatically.</p>
        </div>
        <hr />
        <div>
          <h4 className='sub-title title-with-link' id='leafletMap'>
            Leaflet Map <DemoButton preview='https://cuba-nextjs.vercel.app/app/map/leafletmap' official='https://www.npmjs.com/package/react-leaflet' />
          </h4>
          <Img src='/assets/images/leafletMap.gif' className='img-bordered w-100 ' alt='' />
          <h5 className='inner-sub-title mt-2'>Installing and usage</h5>
          <CodeShowCaseBox code={prismData.installLeaflet} />
          <CodeShowCaseBox code={prismData.usageLeaflet} />
          <h5 className='inner-sub-title mt-2'>Remove package from project</h5>
          <CodeShowCaseBox code={prismData.unInstallLeaflet} />
        </div>
      </div>
    </div>
  );
};

export default Maps;
