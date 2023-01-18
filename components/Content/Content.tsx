import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';
import Image from 'next/image';
import { SbBlokData, StoryblokComponent } from '@storyblok/react';

type Content = {
  title?: string;
  description?: string;
  image?: SbAssetData;
  imageAlt?: string;
  imagePosition?: 'left' | 'right' | 'top' | 'bottom';
  textAlign?: 'left' | 'right' | 'center';
  fullWidth?: boolean;
  background?: boolean;
  topPadding?: boolean;
  bottomPadding?: boolean;
  content?: SbBlokData[];
};

type Props = {
  blok: Content;
};

export const Content = ({ blok }: Props) => (
  <section
    className={twMerge(
      classNames({
        'bg-backgroundPurple': blok.background,
        'pt-28': blok.topPadding,
        'pb-28': blok.bottomPadding
      })
    )}
  >
    <div
      className={twMerge(
        classNames('grid gap-8 px-8 md:px-16', {
          'container max-w-[1280px]': !blok.fullWidth,
          'text-left': blok.textAlign === 'left',
          'text-center': blok.textAlign === 'center',
          'text-right': blok.textAlign === 'right',
          'grid-cols-1': !blok.image?.filename,
          'grid-rows-2 md:grid-cols-2':
            blok.image?.filename &&
            (blok.imagePosition === 'left' || blok.imagePosition === 'right'),
          'grid-rows-2':
            blok.image?.filename &&
            (blok.imagePosition === 'top' || blok.imagePosition === 'bottom')
        })
      )}
    >
      <div
        className={classNames({
          'row-start-2 row-span-1 col-span-full md:col-start-2 md:col-span-1 md:row-span-full':
            blok.image?.filename && blok.imagePosition === 'left',
          'row-start-2 row-span-1 col-span-full md:col-start-1 md:col-span-1 md:row-span-full':
            blok.image?.filename && blok.imagePosition === 'right',
          'row-start-2 row-span-1 col-span-full':
            blok.image?.filename && blok.imagePosition === 'top',
          'row-start-1 row-span-1 col-span-full':
            blok.image?.filename && blok.imagePosition === 'bottom'
        })}
      >
        {blok.title && <h2>{blok.title}</h2>}
        {blok.description && <p className="mb-8">{blok.description}</p>}
        {blok.content && (
          <div
            className={classNames('flex flex-col md:flex-row gap-6', {
              'justify-start': blok.textAlign === 'left',
              'justify-center': blok.textAlign === 'center',
              'justify-end': blok.textAlign === 'right'
            })}
          >
            {blok.content.map((nestedBlok) => (
              <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
          </div>
        )}
      </div>

      {blok.image?.filename && blok.imageAlt && (
        <div
          className={classNames('relative w-full h-full', {
            'row-start-1 row-span-1 col-span-full md:col-start-1 md:col-span-1 md:row-span-full':
              blok.image?.filename && blok.imagePosition === 'left',
            'row-start-1 row-span-1 col-span-full md:col-start-2 md:col-span-1 md:row-span-full':
              blok.image?.filename && blok.imagePosition === 'right',
            'row-start-1 row-span-1 col-span-full':
              blok.image?.filename && blok.imagePosition === 'top',
            'row-start-2 row-span-1 col-span-full':
              blok.image?.filename && blok.imagePosition === 'bottom'
          })}
        >
          <Image
            src={blok.image.filename}
            alt={blok.imageAlt}
            fill
            className="object-contain"
          />
        </div>
      )}
    </div>
  </section>
);
