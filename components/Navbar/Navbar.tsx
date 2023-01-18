import Image from 'next/image';
import { NavList } from '../NavList';
import type { NavLink } from '../NavLink';

type Navbar = {
  logo: SbAssetData;
  navigationItems: NavLink[];
};

type Props = {
  blok: Navbar;
};

export const Navbar = ({ blok }: Props) => (
  <header className="w-full">
    <div className="h-2 bg-gradient-blue-green"></div>
    <div className="h-16 py-2 flex justify-between items-center container mx-auto">
      <Image
        src={blok.logo.filename}
        alt="Peerpep logo"
        width={0}
        height={0}
        className="w-auto h-full"
      />
      <div>
        <NavList items={blok.navigationItems} />
      </div>
    </div>
  </header>
);
