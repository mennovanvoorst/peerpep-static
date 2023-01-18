import { SbBlokData, StoryblokComponent } from '@storyblok/react';
import classNames from 'classnames';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

export type NavLink = {
  label: string;
  path: string;
  target: HrefTarget;
} & SbBlokData;

type Props = {
  blok: NavLink;
  activePath: string;
};

export const NavLink = ({ blok, activePath }: Props) => (
  <li key={blok.path}>
    <Link
      href={blok.path}
      target={blok.target}
      className={twMerge(
        classNames('hover:text-pink-500 active:text-pink-500', {
          'font-medium text-pink-500': activePath === blok.path
        })
      )}
    >
      {blok.label}
    </Link>
  </li>
);
