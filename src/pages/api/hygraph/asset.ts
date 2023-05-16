import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const hygraphURL = process.env.HYGRAPH_READ_API;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!hygraphURL) {
      throw new Error('URL is undefined');
    }

    const axResponse = await axios.post(hygraphURL, {
      query: `
        query Assets {
          assets {
            createdAt
            id
            publishedAt
            fileName
            url
            updatedAt
          }
        }
      `
    },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    res.status(axResponse.status).json(axResponse.data);
  } catch (err) {
    console.error(err);
    res.status(403).json({ err });
  }
};