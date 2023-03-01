export interface message {
  room: string;
  sender: string;
  receiver: string;
  message: string;
  created_at: Date;
  updated_at: Date;
}
