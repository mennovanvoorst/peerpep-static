import { StoryblokComponent } from '@storyblok/react';
import { Feature } from '../Feature/Feature';

type Brands = {
  brands?: Feature[];
};

type Props = {
  blok: Brands;
};

export const Brands = ({ blok }: Props) => (
  <ul className="w-full flex gap-8 justify-center align-center">
    {blok.brands &&
      blok.brands.map((nestedBrand) => (
        <StoryblokComponent blok={nestedBrand} key={nestedBrand._uid} />
      ))}
  </ul>
);
