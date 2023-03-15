export interface message {
  id: number;
  room_id: number;
  sender: string;
  receiver: string;
  text: string;
  created_at: Date;
  updated_at: Date;
}
