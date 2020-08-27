export type EmbedType = 'twitter';

export type BlogData = {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  image?: string;
  embedTypes: EmbedType[];
};
