import type { NextPage } from 'next';
import {
  ISbStoryData,
  StoryblokComponent,
  getStoryblokApi,
  useStoryblokState
} from '@storyblok/react';

type Props = {
  story: ISbStoryData;
  header: ISbStoryData;
  footer: ISbStoryData;
};

const Home: NextPage<Props> = ({ story, header, footer }) => {
  story = useStoryblokState(story);
  header = useStoryblokState(header);
  footer = useStoryblokState(footer);

  return (
    <>
      <StoryblokComponent blok={header.content} />
      <StoryblokComponent blok={story.content} />
      <StoryblokComponent blok={footer.content} />
    </>
  );
};

export async function getStaticProps() {
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/home`, {
    version: 'draft'
  });

  let { data: headerData } = await storyblokApi.get(`cdn/stories/header`, {
    version: 'draft'
  });

  let { data: footerData } = await storyblokApi.get(`cdn/stories/footer`, {
    version: 'draft'
  });

  return {
    props: {
      story: data ? data.story : false,
      header: headerData ? headerData.story : false,
      footer: footerData ? footerData.story : false
    },
    revalidate: 3600
  };
}

export default Home;
