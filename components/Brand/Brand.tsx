import { SbBlokData } from '@storyblok/react';
import Image from 'next/image';

export type Brand = {
  logo: SbAssetData;
  name: string;
} & SbBlokData;

type Props = {
  blok: Brand;
};

export const Brand = ({ blok }: Props) => (
  <li className="relative block w-1/2 md:w-1/4 lg:w-1/6 h-8">
    <Image
      src={blok.logo.filename}
      alt={blok.name}
      fill
      className="object-contain"
    />
  </li>
);
