export type Book = {
  title: string;
  author: string;
  status: 'reading' | '2026' | '2025' | 'want' | '2024';
  take?: string;
  tags?: string[];
  rating?: 1 | 2 | 3 | 4 | 5;
};

export const books: Book[] = [
  {
    title: 'Tantra',
    author: 'Osho',
    status: '2026',
    take: "Osho's been a super controversial philosopher, but this is a good read because it breaks a lot of social norms we've made up in our heads. Also great if you're an overthinker or live inside your head a lot.",
    tags: ['philosophy'],
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    status: '2026',
    take: 'Learnt the importance of following your journey regardless of the obstacles. Everyone has their own treasure they must find. Trust yourself and your heart — comfort your emotions instead of letting them win.',
    tags: ['philosophy'],
  },
  {
    title: 'Think Like a Monk',
    author: 'Jay Shetty',
    status: '2025',
    take: "This book helped me quite literally think like a monk. Don't get too attached to your thoughts, live for a higher purpose besides yourself. Follow your Dharma.",
    tags: ['philosophy'],
  },
  {
    title: 'Zero to One',
    author: 'Peter Thiel',
    status: '2025',
    take: 'The best business book I\'ve read. Innovation (0→1) is always valued more than distribution (1→n). Build monopolies, find secrets, and exterminate your competition.',
    tags: ['biz'],
    rating: 5,
  },
  {
    title: 'The Almanack of Naval Ravikant',
    author: 'Eric Jorgenson',
    status: '2025',
    take: 'Life is a test and the only way to win is to get what you want out of it. Leverage is the biggest key to building wealth. Helped me get over the fear of judgement.',
    tags: ['biz', 'philosophy'],
    rating: 5,
  },
];
