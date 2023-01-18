import { StoryblokComponent, storyblokEditable } from '@storyblok/react';
import { Button } from '../Button';

type Hero = {
  backgroundImage?: SbAssetData;
  title?: string;
  description?: string;
  buttons?: Button[];
};

type Props = {
  blok: Hero;
};

export const Hero = ({ blok }: Props) => {
  const backgroundImage = blok.backgroundImage?.filename
    ? `linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url(${blok.backgroundImage.filename})`
    : 'linear-gradient(150deg, #2AB6E0 0%, #4FBB84 64%)';

  return (
    <div
      className="relative w-full bg-cover py-48 bg-center"
      style={{ backgroundImage }}
      {...storyblokEditable(blok)}
    >
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
};
