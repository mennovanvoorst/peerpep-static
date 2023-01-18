import { StoryblokComponent } from '@storyblok/react';
import { Feature } from '../Feature/Feature';

type Features = {
  features?: Feature[];
};

type Props = {
  blok: Features;
};

export const Features = ({ blok }: Props) => (
  <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-8 justify-center">
    {blok.features &&
      blok.features.map((nestedFeature) => (
        <StoryblokComponent blok={nestedFeature} key={nestedFeature._uid} />
      ))}
  </ul>
);
