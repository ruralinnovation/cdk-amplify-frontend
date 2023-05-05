import { ApolloProvider, useQuery } from '@apollo/client';
import { Box, Container } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';

import {
  broadband_unserved_blocks_geojson,
  county_broadband_farm_bill_eligibility_geojson,
  incumbent_electric_providers_geo_geojson,
} from '../services/bcatQueries';
import Map, { Layer, Source, FillLayer, LineLayer } from 'react-map-gl';

// For more information on data-driven styles, see https://www.mapbox.com/help/gl-dds-ref/
export const dataLayer1: LineLayer = {
  id: 'county_broadband_farm_bill_eligibility_line_layer',
  source: 'test',
  type: 'line',
  paint: {
    'line-color': 'black',
  },
};
export const dataLayer2: FillLayer = {
  id: 'county_broadband_farm_bill_eligibility_fill_layer',
  source: 'test',
  type: 'fill',
  paint: {
    'fill-color': '#0080ff', // blue color fill
    'fill-opacity': 0.5,
  },
};

function MapContainer() {
  const { loading, error, data } = useQuery(county_broadband_farm_bill_eligibility_geojson, {
    fetchPolicy: 'no-cache',
    variables: {
      state_abbr: 'TN',
      skipCache: true,
    },
  });

  useEffect(() => {
    console.log('ERROR ', error);
  }, [error]);

  useEffect(() => {
    console.log('Data ', data);
  }, [data]);

  if (loading) return <div>Loading Data</div>;

  return (
    <Container maxWidth="xl">
      <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
        {data && (
          <Map
            mapboxAccessToken="pk.eyJ1IjoibWVyZ2luZ2Z1dHVyZXMiLCJhIjoiY2tpNWhvdGNqMWk0bjJ6bnpmMGt4dm51YyJ9.i4MvF31Xr5fxscllkRx04w"
            initialViewState={{
              longitude: -86.503,
              latitude: 35.562,
              zoom: 7,
            }}
            style={{ width: '100%', height: '100vh' }}
            mapStyle="mapbox://styles/mergingfutures/ckyn2t9jv0una14prs29fkgy2">
            <Source type="geojson" id="test" data={data.county_broadband_farm_bill_eligibility_geojson}>
              <Layer {...dataLayer1} />
              <Layer {...dataLayer2} />
            </Source>
            {/* {data.incumbent_electric_providers_geo_geojson.features.map((feature: any, i: number) => {
              return (
                <Source key={`f-${i + 1}}`} type="geojson" id={`f-${i + 1}}`} data={feature}>
                  <Layer {...getSource(`f-${i + 1}}`, dataLayer1)} />
                  <Layer {...getSource(`f-${i + 1}}`, dataLayer2)} />
                </Source>
              );
            })} */}
          </Map>
        )}
      </Box>
    </Container>
  );
}

export default MapContainer;
