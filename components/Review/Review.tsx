import { SbBlokData } from '@storyblok/react';
import classNames from 'classnames';

export type Review = {
  name: string;
  company: string;
  content: string;
} & SbBlokData;

type Props = {
  blok: Review;
  columns: number;
};

export const Review = ({ blok, columns }: Props) => (
  <div
    key={blok.name}
    className={classNames(
      'flex flex-col flex-shrink-0 relative w-full text-center px-8 lg:px-16 py-8 border-r-2 border-backgroundPurple last:border-0',
      {
        'basis-full md:basis-1/2 lg:basis-1/3': columns === 3,
        'basis-full md:basis-1/2': columns === 2,
        'basis-full': columns === 1
      }
    )}
  >
    <p className="text-lg">{blok.content}</p>
    <span className="mt-4 font-normal text-xl">{blok.name}</span>
    <span>{blok.company}</span>
  </div>
);
