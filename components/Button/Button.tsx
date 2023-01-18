import { SbBlokData } from '@storyblok/react';
import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

type ButtonVariants = 'primary' | 'secondary' | 'transparent';
type ButtonSizes = 'sm' | 'md' | 'lg';

export type Button = {
  label: string;
  variant: ButtonVariants;
  size: ButtonSizes;
  icon?: SbAssetData;
  link?: string;
  path: string;
  target: HrefTarget;
} & SbBlokData;

type Props = {
  blok: Button;
};

export const Button = ({ blok }: Props) => {
  const getVariant = () => {
    switch (blok.variant) {
      case 'primary':
        return 'bg-pink-500 hover:bg-pink-300 active:bg-pink-400 text-white relative active:top-px';
      case 'secondary':
        return 'bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-black relative active:top-px';
      case 'transparent':
        return 'bg-transparent hover:underline text-black relative active:top-px';
    }
  };

  const getSize = () => {
    switch (blok.size) {
      case 'sm':
        return `${
          blok.icon?.filename ? 'pl-2 pr-4' : 'px-4'
        } h-8 text-sm gap-1`;
      case 'md':
        return `${
          blok.icon?.filename ? 'pl-4 pr-6' : 'px-6'
        } h-10 text-md gap-2`;
      case 'lg':
        return `${
          blok.icon?.filename ? 'pl-6 pr-8' : 'px-8'
        } h-12 text-lg gap-3`;
    }
  };

  const getIcon = () => {
    let className = '';

    switch (blok.size) {
      case 'sm':
        className = 'w-2 h-2 lg:h-4';
        break;
      case 'md':
        className = 'w-4 h-4 lg:h-6';
        break;
      case 'lg':
        className = 'w-6 h-6 lg:h-8';
        break;
    }

    switch (blok.variant) {
      case 'primary':
        className += `${className} filter-white`;
        break;
    }

    if (!blok.icon) return;

    return (
      <span className={twMerge('relative', className)}>
        <Image src={blok.icon?.filename} alt="Icon" fill />
      </span>
    );
  };

  return (
    <Link href={blok.path || '#'} target={blok.target}>
      <button
        role="link"
        type="button"
        className={twMerge(
          'h-10 rounded-lg font-normal flex items-center justify-center md:justify-start',
          getVariant(),
          getSize()
        )}
      >
        {blok.icon?.filename && getIcon()}
        {blok.label}
      </button>
    </Link>
  );
};
