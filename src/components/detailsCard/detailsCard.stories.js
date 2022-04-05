import React from "react";
import DetailsCard from "./index";

export default {
  title: "DetailsCard",
  component: DetailsCard,
};
const Template = (args) => <DetailsCard {...args} />;

export const DetailsCardStory = Template.bind({});
DetailsCardStory.args = {
  image:
    "https://lastfm.freetls.fastly.net/i/u/64s/addee1d378532efe8699f28bc2913fb7.png",
  album: "Graduation",
  artist: "Kanye West",
  playcount: "44332322",
};
