export interface BlogData {
  id: string;
  title: string;
  description: string;
  createdAt: string;
}

export const blogDataList: BlogData[] = [
  { id: 'hello-world', title: 'ブログ作りました', description: 'ブログ作りました', createdAt: '2019-10-01' },
];
