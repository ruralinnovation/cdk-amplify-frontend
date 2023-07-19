import { useQuery } from '@apollo/client';
import { Box, Container } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';

import county_summary_geojson from '../services/bcatQueries';

import Map from 'react-map-gl';
import {
  Layer,
  MapboxGeoJSONFeature,
  MapRef, MapLayerMouseEvent, Source,
  MapboxStyle,
  NavigationControl,
  Popup,
  ScaleControl,
  FullscreenControl,
  GeolocateControl  } from 'react-map-gl';
import bbox from '@turf/bbox';
import { mapStyle, fillLayer, lineLayer } from './MapStyle';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint-disable-next-line import/no-webpack-loader-syntax */
/* eslint-disable @typescript-eslint/no-var-requires */
/* @ts-ignore */
// import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';
import MapboxWorker from 'mapbox-gl/dist/mapbox-gl-csp-worker?worker';
import mapboxgl from "mapbox-gl";
// (mapboxgl as any).workerClass = new MapboxWorker();

function MapContainer() {

  const { loading, error, data } = useQuery(county_summary_geojson, {
    fetchPolicy: 'no-cache',
    variables: {
      "geoid_co": "47047",
      skipCache: true,
    },
  });

  // const mapRef = React.createRef();
  const mapRef = useRef<MapRef>(null);
  const [ popupInfo, setPopupInfo ] = useState<MapboxGeoJSONFeature | null>(null);

  const onClick = (event: MapLayerMouseEvent) => {
    if (!!event && typeof event === 'object' && typeof event.features === 'object') {
      const feature: MapboxGeoJSONFeature = event.features[0];

      event.originalEvent.stopPropagation();

      if (feature) {
        // calculate the bounding box of the feature
        const [minLng, minLat, maxLng, maxLat] = bbox(feature);

        (feature as any)['longitude'] = (minLng + maxLng) / 2;
        (feature as any)['latitude'] = (minLat + maxLat) / 2;
        (feature as any)['label'] = ((feature as any)['properties'] && (feature as any)['properties']['state_abbr']) ?
          "Feature in " + (feature as any)['properties']['state_abbr']:
          "Feature";

        console.log("feature:", feature);

        setPopupInfo(feature);

        if (typeof mapRef.current === 'object' && mapRef.current !== null) {

          mapRef.current.fitBounds(
            [
              [minLng, minLat],
              [maxLng, maxLat],
            ],
            { padding: 40, duration: 1000 },
          );
        }
      }
    }

  };

  useEffect(() => {
    console.log('ERROR ', error);
  }, [error]);

  useEffect(() => {
    console.log('Data ', data);
  }, [data]);

  if (typeof mapRef.current === 'object') { return (
    <Container disableGutters maxWidth={false}>{/*maxWidth="xl">*/}
      {data && (
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
          <Map
            mapboxAccessToken="pk.eyJ1IjoicnVyYWxpbm5vIiwiYSI6ImNqeHl0cW0xODBlMm0zY2x0dXltYzRuazUifQ.zZBovoCHzLIW0wCZveEKzA"
            mapStyle={{
              ...mapStyle
            } as MapboxStyle}
            initialViewState={{
              longitude: -86.503,
              latitude: 35.562,
              zoom: 7,
            }}
            interactiveLayerIds={['county_broadband_farm_bill_eligibility_fill_layer']}
            onClick={onClick}
            ref={mapRef}
            style={{ width: '100%', height: '100vh' }}
          >
            {(!!data && data.hasOwnProperty("county_summary_geojson")) && (
              <Source type="geojson" id="test" data={data.county_summary_geojson}>
                <Layer {...fillLayer} />
                <Layer {...lineLayer} />
              </Source>
            )}
            {/* {data.incumbent_electric_providers_geo_geojson.features.map((feature: any, i: number) => {
              return (
                <Source key={`f-${i + 1}}`} type="geojson" id={`f-${i + 1}}`} data={feature}>
                  <Layer {...getSource(`f-${i + 1}}`, dataLayer1)} />
                  <Layer {...getSource(`f-${i + 1}}`, dataLayer2)} />
                </Source>
              );
            })} */}
            <GeolocateControl position="top-left" />
            <FullscreenControl position="top-left" />
            <NavigationControl position="top-left" />
            <ScaleControl />

            {popupInfo && (popupInfo as any)['longitude'] && (popupInfo as any)['latitude'] && (popupInfo as any)['label'] && (
              <Popup
                anchor="top"
                longitude={Number((popupInfo as any).longitude)}
                latitude={Number((popupInfo as any).latitude)}
                closeButton={true}
                closeOnClick={true}
                onClose={() => setPopupInfo(null)}
              >
                <div>
                  <h3>{(popupInfo as any)['label'] }</h3>
                </div>
              </Popup>
            )}

          </Map>
        </Box>
      )}
    </Container>
  ) } else {
    return <div>Loading Data</div>;
  }
}

export default MapContainer;
