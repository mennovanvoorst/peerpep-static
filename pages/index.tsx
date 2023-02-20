import type { NextPage } from 'next';
import {
  ISbStoryParams,
  ISbStoryData,
  StoryblokComponent,
  getStoryblokApi,
  useStoryblokState
} from '@storyblok/react';

type Params = {
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

export async function getStaticProps({ locale }: Params) {
  const storyblokApi = getStoryblokApi();
  const sbParams: ISbStoryParams = {
    version: 'draft',
    language: locale
  };

  let { data } = await storyblokApi.get(`cdn/stories/home`, sbParams);

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

export default Home;
