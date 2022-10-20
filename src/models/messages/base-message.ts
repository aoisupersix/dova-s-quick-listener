import { MessageType } from './message-type'

/**
 * Chromeのメッセージパッシングで使用するベースメッセージを示す
 */
export interface BaseMessage {
    /**
     * メッセージ種別
     */
    type: MessageType
}
