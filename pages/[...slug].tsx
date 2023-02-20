import type { NextPage } from 'next';
import {
  ISbStoryData,
  StoryblokComponent,
  getStoryblokApi,
  useStoryblokState
} from '@storyblok/react';
import { ISbStoryParams } from '@storyblok/react';

type Params = {
  params: {
    slug: string;
  };
  locale: Locale;
};

type Props = {
  story: ISbStoryData;
  header: ISbStoryData;
  footer: ISbStoryData;
  locale: Locale;
};

const Home: NextPage<Props> = ({ story, header, footer, locale }) => {
  story = useStoryblokState(story, { language: locale });
  header = useStoryblokState(header, { language: locale });
  footer = useStoryblokState(footer, { language: locale });

  return (
    <>
      <StoryblokComponent blok={header.content} locale={locale} />
      <StoryblokComponent blok={story.content} locale={locale} />
      <StoryblokComponent blok={footer.content} locale={locale} />
    </>
  );
};

export async function getStaticProps({ params, locale }: Params) {
  const storyblokApi = getStoryblokApi();
  const sbParams: ISbStoryParams = {
    version: 'draft',
    language: locale
  };

  let { data } = await storyblokApi.get(`cdn/stories/${params.slug}`, sbParams);

  let { data: headerData } = await storyblokApi.get(
    `cdn/stories/header`,
    sbParams
  );

  let { data: footerData } = await storyblokApi.get(
    `cdn/stories/footer`,
    sbParams
  );

  return {
    props: {
      locale,
      story: data ? data.story : false,
      header: headerData ? headerData.story : false,
      footer: footerData ? footerData.story : false
    },
    revalidate: 3600
  };
}

export async function getStaticPaths({ locales }: { locales: Locale[] }) {
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get('cdn/links/', {
    version: 'draft'
  });

  let paths: Params[] = [];
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === 'home') {
      return;
    }

    const slug = data.links[linkKey].slug;
    let splittedSlug = slug.split('/');

    for (const locale of locales) {
      paths.push({
        params: { slug: splittedSlug },
        locale
      });
    }
  });

  return {
    paths: paths,
    fallback: false
  };
}

export default Home;
