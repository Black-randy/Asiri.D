import { VercelRequest, VercelResponse } from '@vercel/node';
import sharp from 'sharp';
import fetch from 'node-fetch'; // Ensure `node-fetch` is installed
import { Readable } from 'stream';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const { url, width = 800 } = req.query;

    // Validate `url`
    if (!url || typeof url !== 'string') {
      return res.status(400).json({ error: 'URL is required and must be a string' });
    }

    // Validate `width`
    const parsedWidth = parseInt(width as string, 10);
    if (isNaN(parsedWidth) || parsedWidth <= 0) {
      return res.status(400).json({ error: 'Width must be a positive number' });
    }

    // Fetch the image with a timeout
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000); // 5-second timeout
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeout);

    if (!response.ok) {
      return res.status(400).json({ error: 'Failed to fetch the image from the provided URL' });
    }

    // Stream the image data
    const imageStream = Readable.from(response.body);

    // Optimize the image using sharp
    const optimizedImage = await sharp()
      .resize(parsedWidth, null, {
        fit: 'inside',
        withoutEnlargement: true,
      })
      .webp({ quality: 80 });

    // Pipe the optimized image to the response
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    res.setHeader('Content-Type', 'image/webp');
    imageStream.pipe(optimizedImage).pipe(res);
  } catch (error) {
    console.error('Image optimization error:', error);
    const statusCode = error.name === 'AbortError' ? 408 : 500; // Handle timeout errors
    res.status(statusCode).json({ error: 'Failed to optimize image' });
  }
}