import { OGImageRoute } from 'astro-og-canvas';
import { getPosts, slugOf, CATEGORY_LABEL, humanDate } from '../../lib/blog';

const posts = await getPosts();

const pages: Record<string, { title: string; description: string }> = {
  default: {
    title: 'See the scam before you sign.',
    description: 'SIGNWARD  |  signward.app',
  },
  blog: {
    title: 'Signward security blog',
    description: 'WALLET SECURITY  |  signward.app/blog',
  },
};
for (const p of posts) {
  pages[slugOf(p)] = {
    title: p.data.title,
    description: `${CATEGORY_LABEL[p.data.category].toUpperCase()}  |  ${humanDate(p.data.pubDate)}  |  signward.app`,
  };
}

export const { getStaticPaths, GET } = await OGImageRoute({
  param: 'slug',
  pages,
  getImageOptions: (_path, page) => ({
    title: page.title,
    description: page.description,
    bgGradient: [
      [20, 163, 147],
      [15, 118, 110],
      [11, 95, 88],
    ],
    padding: 80,
    logo: { path: './src/assets/shield.png', size: [120] },
    font: {
      title: { color: [255, 255, 255], size: 68, weight: 'Bold', families: ['Inter'], lineHeight: 1.15 },
      description: { color: [207, 232, 227], size: 28, weight: 'Medium', families: ['Inter'] },
    },
    fonts: ['./src/assets/fonts/Inter-700.ttf', './src/assets/fonts/Inter-500.ttf'],
  }),
});
