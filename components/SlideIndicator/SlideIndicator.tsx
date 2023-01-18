import { useState } from 'react';
import classNames from 'classnames';
import { StoryblokComponent } from '@storyblok/react';

type Props = {
  amount: number;
  currentSlide: number;
  onClick: (index: number) => void;
};

export const SlideIndicator = ({ amount, onClick, currentSlide }: Props) => (
  <ul className="flex gap-6">
    {[...Array(amount)].map((value, index) => (
      <li
        role="button"
        key={`slide_${index}`}
        onClick={() => onClick(index)}
        className={classNames(
          'rounded-full w-3 h-3 hover:bg-pink-300 active:bg-pink-400',
          {
            'bg-backgroundPurple': currentSlide !== index
          },
          {
            'bg-pink-500': currentSlide === index
          }
        )}
      />
    ))}
  </ul>
);
