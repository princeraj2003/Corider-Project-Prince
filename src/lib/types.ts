export type HeaderType = {
  name: string;
  from: string;
  to: string;
};

export type SenderType = {
  user_id: string;
  image: string;
  is_kyc_verified: boolean;
  self: boolean;
};

export type ChatType = {
  id: string;
  message: string;
  sender: SenderType;
  time: string;
};

export type ResponseType = {
  message: string;
  status: string;
};

export interface ChatContextInterface extends HeaderType, ResponseType {
  chats: ChatType[];
  addChat: (chat: ChatType) => void;
  getChat: () => void;
  getMoreChats: (page: number) => void;
}
