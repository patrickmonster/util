export interface ChzzkApiResult<T> {
  code: number;
  message: string;
  result: T;
}

export interface ChzzkChatOptions {
  server?: string;
  channelId: string;
  accessToken: string;

  onMessage: (message: ChatMessage) => void;
  onDonation?: (message: ChatMessage) => void;
}

export interface ChzzkChannelStatus {
  liveTitle: string;
  status: string;
  concurrentUserCount: number;
  accumulateCount: number;
  paidPromotion: boolean;
  adult: boolean;
  chatChannelId: string;
  categoryType: string;
  liveCategory: string;
  liveCategoryValue: string;
  livePollingStatusJson: string;
  faultStatus: null;
  userAdultStatus: string;
  chatActive: boolean;
  chatAvailableGroup: string;
  chatAvailableCondition: string;
  minFollowerMinute: number;
}

export interface ChzzkChatAccessToken {
  accessToken: string;
  temporaryRestrict: {
    temporaryRestrict: boolean;
    times: number;
    duration: any;
    createdTime: any;
  };
  realNameAuth: boolean;
  extraToken: string;
}

interface OldChatMessage {
  serviceId: string;
  channelId: string;
  messageTime: number;
  userId: string;
  profile: string;
  content: string;
  extras: string;
  memberCount: number;
  messageTypeCode: number;
  messageStatusType: string;
  createTime: number;
  updateTime: number;
  msgTid: string;
}

export interface ChatConnection {
  accTkn: string;
  auth: string;
  uuid: string;
  sid: string;
}

export interface ChatMessage {
  svcid: string;
  cid: string;
  mbrCnt: number;
  uid: string;
  profile: string;
  msg: string;
  msgTypeCode: number;
  msgStatusType: string;
  extras: string;
  ctime: number;
  utime: number;
  msgTid: string;
  session: boolean;
  msgTime: number;
}

export interface ChzzkChatMessage<
  T,
  U = 10100 | 94008 | 15101 | 93101 | 93102 | 0
> {
  svcid: string;
  ver: string;
  bdy: T;
  cmd: U;
  tid: string;
  cid: string;
}

type ChzzkChatPing = ChzzkChatMessage<ChatConnection, 0>;

type ChzzkChat10100 = ChzzkChatMessage<ChatConnection, 10100>;
// type ChzzkChat94008 = ChzzkChatMessage<ChatMessage, 94008>; // 클린봇
type ChzzkChat15101 = ChzzkChatMessage<
  { messageList: OldChatMessage[] },
  15101
>; // 이전 메세지
type ChzzkChat93101 = ChzzkChatMessage<ChatMessage[], 93101>;
type ChzzkChat93102 = ChzzkChatMessage<ChatMessage[], 93102>;

export type ChzzkWsMessage =
  | ChzzkChatPing
  | ChzzkChat10100
  // | ChzzkChat94008
  | ChzzkChat15101
  | ChzzkChat93101
  | ChzzkChat93102;
