import { useState } from 'react';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import type { Review } from '../Review';
import { StoryblokComponent } from '@storyblok/react';
import { BREAKPOINTS } from '../../constants';
import { SlideIndicator } from '../SlideIndicator';

type Reviews = {
  reviews: Review[];
  columns: string;
};

type Props = {
  blok: Reviews;
};

export const Reviews = ({ blok }: Props) => {
  const columns = parseInt(blok.columns, 10);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleBulletClick = (index: number) => setCurrentSlide(index);

  const calculateSlideTransform = () => currentSlide * -100;

  return (
    <div className="relative w-full">
      <div className="w-full overflow-hidden relative flex flex-col items-center justify-center">
        <div
          className={
            'flex flex-row transition ease-out duration-700 relative w-full'
          }
          style={{ transform: `translateX(${calculateSlideTransform()}%)` }}
        >
          {blok.reviews &&
            blok.reviews.map((nestedReview) => (
              <StoryblokComponent
                blok={nestedReview}
                key={nestedReview._uid}
                columns={columns}
              />
            ))}
        </div>

        <div
          className={twMerge(
            classNames('hidden', {
              'lg:block': columns === 3
            })
          )}
        >
          <SlideIndicator
            amount={Math.ceil(blok.reviews.length / 3)}
            currentSlide={currentSlide}
            onClick={handleBulletClick}
          />
        </div>

        <div
          className={twMerge(
            classNames('hidden', {
              'md:block lg:hidden': columns === 3,
              'md:block lg:block': columns === 2
            })
          )}
        >
          <SlideIndicator
            amount={Math.ceil(blok.reviews.length / 2)}
            currentSlide={currentSlide}
            onClick={handleBulletClick}
          />
        </div>

        <div
          className={twMerge(
            classNames('hidden', {
              block: columns === 1,
              'block md:hidden lg:hidden': columns > 1
            })
          )}
        >
          <SlideIndicator
            amount={blok.reviews.length}
            currentSlide={currentSlide}
            onClick={handleBulletClick}
          />
        </div>
      </div>
    </div>
  );
};
