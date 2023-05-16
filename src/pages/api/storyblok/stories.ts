import { NextApiRequest, NextApiResponse } from "next";
import StoryblokClient from 'storyblok-js-client';

const sbToken = process.env.STORYBLOK_TOKEN;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!sbToken) {
      throw new Error('token is undefined');
    }

    const Storyblok = new StoryblokClient({
      accessToken: sbToken,
      region: 'us',
      cache: {
        clear: 'auto',
        type: 'memory'
      }
    })

    const sbResponse = await Storyblok.get('cdn/stories');

    res.json(sbResponse.data);
    
  } catch (err) {
    console.error(err);
    res.status(403).json({ err });
  }
};