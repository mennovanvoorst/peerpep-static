import { storyblokEditable, StoryblokComponent } from '@storyblok/react';
import Head from 'next/head';

type Props = {
  blok: {
    title: string;
    description: string;
    thumbnail: SbAssetData;
    body: any[];
  };
};

export const Page = ({ blok }: Props) => {
  const title = `${blok.title} - PeerPep`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={blok.description} key="desc" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={blok.description} />
        <meta property="og:image" content={blok.thumbnail.filename} />
      </Head>

      <main {...storyblokEditable(blok)}>
        {blok.body.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </main>
    </>
  );
};
