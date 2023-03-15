import { message } from './message';

export interface room {
  id: number;
  name: string;
  property_id: number;
  property_image: string;
  seller: string;
  buyer: string;
  messages: Array<message>;
  created_at: Date;
  updated_at: Date;
}
