export class Animal {
  basisOfRecord!: String;
  scientificName!: String;
  kingdom!: String;
  phylum!: String;
  order!: String;
  family!: String;
  genus!: String;
  species!: String;
  genericName!: String;
  specificEpithet!: String;
  decimalLongitude!: Number;
  decimalLatitude!: Number;
  continent!: String;
  year!: Number;
  month!: Number;
  day!: Number;
  eventDate!: String;
  animalImageInfo!: {
    type?: String;
    format?: String;
    creator?: String;
    license?: String;
    rightsHolder?: String;
    identifier?: String;
  };
  locationCountryName!: {
    gid?: String;
    name?: String;
  };
  preciseLocationWithinCountry!: Object;
  animalClass!: String;
  country!: String;
  taxonId!: String;
}
