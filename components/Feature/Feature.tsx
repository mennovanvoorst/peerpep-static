import { SbBlokData } from '@storyblok/react';
import Image from 'next/image';

export type Feature = {
  icon: SbAssetData;
  title: string;
  description?: string;
} & SbBlokData;

type Props = {
  blok: Feature;
};

export const Feature = ({ blok }: Props) => (
  <li className="flex flex-col gap-4">
    <span className="mx-auto bg-gradient-red-pink p-4 rounded-full">
      <span className="relative block w-16 h-16 filter-white">
        <Image src={blok.icon.filename} alt="Icon" fill />
      </span>
    </span>
    <h3>{blok.title}</h3>
    <p>{blok.description}</p>
  </li>
);
