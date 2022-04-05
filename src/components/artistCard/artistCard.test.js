import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import ArtistCard, {
  image,
  listener,
  artist,
  playcount,
  alt,
  onclick,
} from ".";

test("ArtistCard Text Controls", () => {
  render(<ArtistCard />);
  expect(screen.getByText(/artist/i)).toBeInTheDocument();
  expect(screen.getByText(/listeners :/i)).toBeInTheDocument();
  expect(screen.getByText(/playcount :/i)).toBeInTheDocument();
});

test("ArtistCard with props", () => {
  render(
    <ArtistCard
      image={image}
      listener={listener}
      playcount={playcount}
      alt={alt}
      artist={artist}
      onclick={onclick}
    />
  );
});
test("ArtistCard img controls", () => {
  render(<ArtistCard />);
  const image = screen.getByRole("img");
  expect(image).toBeInTheDocument();
  expect(image).toHaveClass("image-area");
});
test("ArtistCard Snapshot", () => {
  const tree = renderer
    .create(
      <ArtistCard
        image={image}
        listener={listener}
        playcount={playcount}
        alt={alt}
        artist={artist}
        onclick={onclick}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
