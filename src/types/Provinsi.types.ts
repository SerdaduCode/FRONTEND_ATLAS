type Geography = {
  description: string;
  climate: string;
  topography: string;
};

type GeneralInfo = {
  area: string;
  population: string;
  capital: string;
  statistics?: {};
};

type Coordinates = {
  latitude: number;
  longtitude: number;
};

export type Provinsi = {
  id: number;
  name: string;
  slug?: string;
  logoUrl: string;
  coordinates: Coordinates;
  generalInfo: GeneralInfo;
  geography: Geography;
};
