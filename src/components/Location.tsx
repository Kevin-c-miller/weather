interface Props {
  location: string;
  long: number;
  lat: number;
}

export default function Location({ location, long, lat }: Props) {
  return (
    <div className="location">
      <h1 className="locationHeader">{location}</h1>
      <div className="longLat">
        <span>
          <strong>Longitude: </strong> {long} | <strong>Latitude: </strong>
          {lat}
        </span>
      </div>
    </div>
  );
}
