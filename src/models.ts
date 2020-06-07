type embedType = 'twitter';

export interface BlogData {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  image?: string;
  embedTypes: embedType[];
}
