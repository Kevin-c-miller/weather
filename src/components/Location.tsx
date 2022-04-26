interface Props {
  location: string;
}

export default function Location({ location }: Props) {
  return (
    <div>
      <h1>{location}</h1>
    </div>
  );
}
