import { EmbedType } from '../models';

export function isTwitterEmbed(embedTypes: EmbedType[]): boolean {
  return embedTypes.includes('twitter');
}
