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
  const backgroundImage = blok.backgroundImage?.filename
    ? `linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url(${blok.backgroundImage.filename})`
    : 'none';

  const backgroundColor = blok.backgroundColor?.color
    ? blok.backgroundColor.color
    : 'transparent';

  return (
    <div
      className={classNames(
        'flex justify-center items-center relative w-full bg-cover bg-center rounded-3xl'
      )}
      style={{ backgroundImage, backgroundColor }}
      {...storyblokEditable(blok)}
    >
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
