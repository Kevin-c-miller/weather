interface Props {
  location: string;
}

export default function Location({ location }: Props) {
  return (
    <>
      <h1 className="location">{location}</h1>
    </>
  );
}
