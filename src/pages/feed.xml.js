import rss from '@astrojs/rss';
import { getPosts, slugOf } from '../lib/blog';

export async function GET(context) {
  const posts = await getPosts();
  return rss({
    title: 'Signward Blog',
    description:
      'Plain-language wallet security: drainers, phishing and crypto scams explained by the Signward team.',
    site: context.site,
    items: posts.map((p) => ({
      link: `/blog/${slugOf(p)}`,
      title: p.data.title,
      pubDate: p.data.pubDate,
      description: p.data.description,
    })),
  });
}
