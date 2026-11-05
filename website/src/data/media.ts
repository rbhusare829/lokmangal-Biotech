import type { ImageMetadata } from 'astro';

const packs = import.meta.glob<{ default: ImageMetadata }>('/src/assets/packs/*.png', { eager: true });
const photos = import.meta.glob<{ default: ImageMetadata }>('/src/assets/photos/*.jpg', { eager: true });

export const pack = (key: string): ImageMetadata => {
  const hit = packs[`/src/assets/packs/${key}.png`];
  if (!hit) throw new Error(`Missing pack image: ${key}`);
  return hit.default;
};

export const photo = (key: string): ImageMetadata => {
  const hit = photos[`/src/assets/photos/${key}.jpg`];
  if (!hit) throw new Error(`Missing photo: ${key}`);
  return hit.default;
};
