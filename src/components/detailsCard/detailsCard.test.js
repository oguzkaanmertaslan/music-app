import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import DetailsCard, {
  image,
  label,
  listener,
  album,
  playcount,
  alt,
  artist,
} from ".";

test("DetailsCard Text Controls", () => {
  render(<DetailsCard />);
  expect(screen.getByText(/play/i)).toBeInTheDocument();
});
test("DetailsCard with props", () => {
  render(
    <DetailsCard
      image={image}
      label={label}
      listener={listener}
      album={album}
      playcount={playcount}
      alt={alt}
      artist={artist}
    />
  );
});
test("DetailsCard img controls", () => {
  render(<DetailsCard />);
  const image = screen.getByRole("img");
  expect(image).toBeInTheDocument();
  expect(image).toHaveClass("image-area");
});
test("DetailsCard Snapshot", () => {
  const tree = renderer
    .create(
      <DetailsCard
        image={image}
        label={label}
        listener={listener}
        album={album}
        playcount={playcount}
        alt={alt}
        artist={artist}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
