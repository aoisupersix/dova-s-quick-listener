import { BaseMessage } from '../base-message'

/**
 * 音楽を取得するメッセージ
 */
export interface FetchMusicMessage extends BaseMessage {
    /**
     * 取得する音楽のURL
     */
    url: string
}
