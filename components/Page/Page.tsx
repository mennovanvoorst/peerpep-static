import { storyblokEditable, StoryblokComponent } from '@storyblok/react';

type Props = {
  blok: {
    header: any[];
    body: any[];
  };
};

export const Page = ({ blok }: Props) => (
  <main {...storyblokEditable(blok)}>
    {blok.body.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);
