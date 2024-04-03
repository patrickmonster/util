import {
  ChatConnection,
  ChatMessage,
  ChzzkApiResult,
  ChzzkChannelStatus,
  ChzzkChatAccessToken,
  ChzzkChatOptions,
  ChzzkWsMessage,
} from "@/interface/Chzzk";

const server = "wss://kr-ss3.chat.naver.com/chat";

export default class ChzzkChat {
  channelId: string;
  sid: string;
  uuid: string;
  chatChannelId: string;
  accessToken: string;
  ws: WebSocket;

  messageCb?: (message: ChatMessage) => void;
  donationCb?: (message: ChatMessage) => void;

  constructor(options: ChzzkChatOptions) {
    this.channelId = options.channelId;
    this.accessToken = options.accessToken;
    this.messageCb = options.onMessage;
    this.donationCb = options.onDonation;
    this.sid = "";
    this.uuid = "";
    this.chatChannelId = "";

    this.ws = new WebSocket(options.server || server);

    this.ws.onopen = this.onOpen.bind(this);
    this.ws.onclose = this.onClose.bind(this);
    this.ws.onerror = this.onError.bind(this);
  }

  getApi<T>(url: string, headers: HeadersInit): Promise<T> {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "GET",
        headers,
      })
        .then((res) => res.json())
        .then(resolve)
        .catch(reject);
    });
  }

  getAccessToken(
    channelId: string
  ): Promise<ChzzkApiResult<ChzzkChatAccessToken>> {
    return this.getApi<ChzzkApiResult<ChzzkChatAccessToken>>(
      `https://api.chzzk.naver.com/polling/v2/channels/${channelId}/live-status`,
      {
        Accept: "application/json",
      }
    );
  }

  getChatChannelId(
    chatChannelId: string
  ): Promise<ChzzkApiResult<ChzzkChannelStatus>> {
    return this.getApi<ChzzkApiResult<ChzzkChannelStatus>>(
      `https://comm-api.game.naver.com/nng_main/v1/chats/access-token?channelId=${chatChannelId}&chatType=STREAMING`,
      {
        Accept: "application/json",
      }
    );
  }

  sendWs(msg: any) {
    this.ws?.send(JSON.stringify(msg));
  }

  onOpen() {
    console.log("CHZZK :: Connection opened");

    this.sendWs({
      ver: "2",
      cmd: 100,
      svcid: "game",
      cid: this.channelId,
      bdy: {
        uid: null,
        devType: 2001,
        accTkn: this.accessToken,
        auth: "READ",
      },
      tid: 1,
    });
  }

  onClose() {
    console.log("CHZZK :: Connection closed");
  }

  onError() {
    console.log("CHZZK :: Connection error");
  }

  onMessage(event: MessageEvent) {
    const { cmd, bdy } = JSON.parse(event.data) as ChzzkWsMessage;

    if (cmd === 0) {
      this.sendWs({
        ver: "2",
        cmd: 10000,
      });
      console.log("CHZZK :: Ping");
      return;
    }

    switch (cmd) {
      case 10100: {
        const { uuid, sid } = bdy as ChatConnection;
        console.log("CHZZK :: Connected", sid);

        this.sid = sid;
        this.uuid = uuid;
      }
      // case 94008: // 클린봇
      //   break;
      case 15101: // 이전 메세지
        break;
      case 93101: // 메세지 수신
        break;
      case 93102: // 도네이션
    }
  }

  getMessage(message: ChatMessage) {
    this.messageCb?.(message);
  }

  close() {
    this.ws?.close();
  }
}
