import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { IconContext } from 'react-icons';
import { storyblokInit, apiPlugin } from '@storyblok/react';
import { Poppins } from '@next/font/google';
import { Page } from '../components/Page';
import { Hero } from '../components/Hero';
import { Button } from '../components/Button';
import { Content } from '../components/Content';
import { Features } from '../components/Features';
import { Feature } from '../components/Feature';
import { Reviews } from '../components/Reviews';
import { Review } from '../components/Review';
import { Brands } from '../components/Brands';
import { Brand } from '../components/Brand';
import { Banner } from '../components/Banner';
import { Navbar } from '../components/Navbar';
import { NavLink } from '../components/NavLink';
import { Footer } from '../components/Footer';

const poppins = Poppins({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin']
});

const components = {
  header: Navbar,
  navLink: NavLink,
  footer: Footer,
  page: Page,
  hero: Hero,
  button: Button,
  content: Content,
  features: Features,
  feature: Feature,
  reviews: Reviews,
  review: Review,
  brands: Brands,
  brand: Brand,
  banner: Banner
};

storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
  components
});

const MyApp = ({ Component, pageProps }: AppProps) => (
  <IconContext.Provider value={{ size: 'auto' }}>
    <Component {...pageProps} className={poppins.className} />
  </IconContext.Provider>
);

export default MyApp;
