import { StoryblokComponent, storyblokEditable } from '@storyblok/react';
import { Button } from '../Button';
import Image from 'next/image';
import classNames from 'classnames';

type Hero = {
  backgroundImage?: SbAssetData;
  title?: string;
  description?: string;
  buttons?: Button[];
};

type Props = {
  blok: Hero;
};

export const Hero = ({ blok }: Props) => (
  <div
    className={classNames('relative w-full py-48 overflow-hidden', {
      'bg-overlay': blok.backgroundImage
    })}
    {...storyblokEditable(blok)}
  >
    {blok.backgroundImage && (
      <Image
        src={blok.backgroundImage?.filename}
        alt="Hero image"
        className="object-cover -z-10"
        fill
        quality={100}
        priority
      />
    )}

    <div className="mx-auto max-w-5xl flex flex-col items-center justify-center text-center text-white px-6 lg:px-16">
      {blok.title && <h1>{blok.title}</h1>}
      {blok.description && <p>{blok.description}</p>}
      {blok.buttons && (
        <div className="flex flex-col md:flex-row gap-6 mt-8">
          {blok.buttons.map((nestedButton) => (
            <StoryblokComponent blok={nestedButton} key={nestedButton._uid} />
          ))}
        </div>
      )}
    </div>
  </div>
);
