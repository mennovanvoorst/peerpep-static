import { useState } from 'react';
import { IoClose, IoMenu } from 'react-icons/io5';
import { twMerge } from 'tailwind-merge';
import { useRouter } from 'next/router';
import { StoryblokComponent } from '@storyblok/react';
import { NavLink } from '../NavLink';
import { LanguageSelector } from '../LanguageSelector';

type Props = {
  items: NavLink[];
  locale: Locale;
};

export const NavList = ({ items, locale }: Props) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleToggleMenu = () => setOpen(!open);
  const menuClass = twMerge(
    'fixed right-0 top-0 lg:relative bg-white lg:bg-transparent w-1/2 lg:w-auto h-full lg:h-auto py-4 px-8 lg:py-0 lg:px-2 transition-transform duration-300 z-50',
    open ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
  );

  const bgClass = twMerge(
    'fixed left-0 top-0 w-full h-full block lg:hidden bg-black opacity-50 z-40',
    open ? 'block' : 'hidden'
  );

  return (
    <>
      <div className={bgClass} />
      <nav className="w-full flex items-center">
        <button
          className="block lg:hidden h-12 mr-4"
          onClick={handleToggleMenu}
        >
          <IoMenu />
        </button>
        <div className={menuClass}>
          <button
            className="block lg:hidden ml-auto h-12"
            onClick={handleToggleMenu}
          >
            <IoClose />
          </button>
          <ul className="flex gap-12 flex-col lg:flex-row lg:items-center mt-4 lg:mt-0">
            {items &&
              items.map((nestedItem) => (
                <StoryblokComponent
                  blok={nestedItem}
                  key={nestedItem._uid}
                  activePath={router.asPath}
                />
              ))}

            <LanguageSelector locale={locale} />
          </ul>
        </div>
      </nav>
    </>
  );
};
