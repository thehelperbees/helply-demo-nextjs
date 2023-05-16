import '../styles/global.css';
import { storyblokInit, apiPlugin } from "@storyblok/react";

import type { AppProps } from 'next/app';
import StoryblokComponent from './storyblok';

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  components: {
    StoryBlok: StoryblokComponent,
  },
});


const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
