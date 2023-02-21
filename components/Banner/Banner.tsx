import { StoryblokComponent, storyblokEditable } from '@storyblok/react';
import { Button } from '../Button';
import classNames from 'classnames';
import Image from 'next/image';

type Hero = {
  backgroundImage?: SbAssetData;
  backgroundColor?: SbColorPickerData;
  image?: SbAssetData;
  title?: string;
  description?: string;
  buttons?: Button[];
};

type Props = {
  blok: Hero;
};

export const Banner = ({ blok }: Props) => {
  const backgroundColor =
    blok.backgroundColor && !blok.backgroundImage
      ? blok.backgroundColor.color
      : 'inherit';

  return (
    <div
      className={classNames(
        'relative flex justify-center items-center w-full rounded-3xl overflow-hidden',
        {
          'bg-overlay': blok.backgroundImage
        }
      )}
      {...storyblokEditable(blok)}
    >
      {blok.backgroundImage && (
        <Image
          src={blok.backgroundImage?.filename}
          alt="Banner image"
          className="object-cover -z-10"
          fill
          quality={100}
        />
      )}

      <div className="flex flex-col justify-between text-white p-8 md:p-16 flex-1">
        {blok.title && <h2>{blok.title}</h2>}
        {blok.description && <p>{blok.description}</p>}
        {blok.buttons && (
          <div className="flex flex-col items-center md:justify-center md:flex-row gap-6 mt-8">
            {blok.buttons.map((nestedButton) => (
              <StoryblokComponent blok={nestedButton} key={nestedButton._uid} />
            ))}
          </div>
        )}
      </div>

      <div className="hidden lg:block w-1/2 h-full flex-1">
        {blok.image?.filename && (
          <span className="relative">
            <Image
              src={blok.image.filename}
              alt="Mockup"
              width={800}
              height={800}
              className="w-auto h-auto md:h-[350px] lg:h-[450px] mx-auto"
            />
          </span>
        )}
      </div>
    </div>
  );
};
