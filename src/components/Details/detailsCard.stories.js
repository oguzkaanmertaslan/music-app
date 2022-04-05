import React from "react";
import DetailsCard from "./index";

export default {
  title: "DetailsCard",
  component: DetailsCard,
};
const Template = (args) => <DetailsCard {...args} />;

export const DetailsCardStory = Template.bind({});
DetailsCardStory.args = {
  image: "image",
  artist: "artist",
  listener: "listener",
  playcount: "playcount",
};
