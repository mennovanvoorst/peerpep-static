import { StoryblokComponent } from '@storyblok/react';
import Image from 'next/image';
import { NavLink } from '../NavLink';

type Footer = {
  logo: SbAssetData;
  navigationItems: NavLink[];
};

type Props = {
  blok: Footer;
};

export const Footer = ({ blok }: Props) => (
  <footer className="w-full">
    <div className="h-2 bg-gradient-blue-green"></div>
    <div className="w-32 h-auto lg:w-auto lg:h-32 py-8 flex flex-col lg:flex-row justify-between items-center container mx-auto">
      <Image
        src={blok.logo.filename}
        alt="Peerpep logo"
        width={0}
        height={0}
        className="w-auto h-full"
      />

      <ul className="flex gap-4 lg:gap-12 flex-col lg:flex-row lg:items-center mt-12 lg:mt-0 text-center lg:text-left">
        {blok.navigationItems &&
          blok.navigationItems.map((nestedItem) => (
            <StoryblokComponent
              blok={nestedItem}
              key={nestedItem._uid}
              activePath="#"
            />
          ))}
      </ul>
    </div>
  </footer>
);
