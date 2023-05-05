import { gql } from '@apollo/client';

export const broadband_unserved_blocks_geojson = gql`
  query ($counties: [String], $skipCache: Boolean) {
    broadband_unserved_blocks_geojson(counties: $counties, skipCache: $skipCache) {
      type
      features {
        type
        id
        properties
        geometry {
          coordinates
          type
        }
      }
    }
  }
`;

export const broadband_unserved_blocks_county_geojson = gql`
  query ($county: String!, $skipCache: Boolean) {
    broadband_unserved_blocks_county_geojson(county: $county, skipCache: $skipCache) {
      type
      features {
        type
        id
        properties
        geometry {
          coordinates
          type
        }
      }
    }
  }
`;

export const county_broadband_farm_bill_eligibility_geojson = gql`
  query ($state_abbr: String!, $skipCache: Boolean) {
    county_broadband_farm_bill_eligibility_geojson(state_abbr: $state_abbr, skipCache: $skipCache) {
      type
      features {
        type
        id
        properties
        geometry {
          coordinates
          type
        }
      }
    }
  }
`;

export const incumbent_electric_providers_geo_geojson = gql`
  query ($state_abbr: String!, $skipCache: Boolean) {
    incumbent_electric_providers_geo_geojson(state_abbr: $state_abbr, skipCache: $skipCache) {
      type
      features {
        type
        id
        properties
        geometry {
          coordinates
          type
        }
      }
    }
  }
`;
