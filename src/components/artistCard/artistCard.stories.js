import React from "react";
import ArtistCard from "./index";

export default {
  title: "ArtistCard",
  component: ArtistCard,
};
const Template = (args) => <ArtistCard {...args} />;

export const ArtistCardStory = Template.bind({});
ArtistCardStory.args = {
  image:
    "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
  artist: "Kanye West",
  listener: "83783728",
  playcount: "44332322",
};
