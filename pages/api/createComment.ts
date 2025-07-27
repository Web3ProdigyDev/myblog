import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'syyirs1j',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2022-11-16',
  useCdn: true,
  token: process.env.SANITY_API_TOKEN,
});

export default async function createComment(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { _id, name, email, comment } = req.body;

  try {
    await client.create({
      _type: 'comment',
      post: {
        _type: 'reference',
        _ref: _id,
      },
      name,
      email,
      comment,
    });
    console.log("✅ Comment Submitted");
    return res.status(200).json({ message: 'Comment Submitted' });
  } catch (err) {
    console.error("❌ Failed to submit comment", err);
    return res.status(500).json({ error: 'Failed to Submit Comment' });
  }
}
