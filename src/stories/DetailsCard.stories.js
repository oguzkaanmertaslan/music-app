import DetailsCard from "../components/DetailsCard";

export default {
  title: "DetailsCard",
  component: DetailsCard,
};

const Template = (args) => <DetailsCard {...args} />;
export const Default = Template.bind({});
Default.args = {
  title: "DetailsCard",
  image:
    "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  album: "Album",
  artist: "Artist",
  listeners: "Listeners",
  playcount: "Playcount",
};
