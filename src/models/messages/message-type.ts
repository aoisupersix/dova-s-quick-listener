const MessageType = {
    /**
     * 音声を取得する
     */
    FetchMusic: 'FetchMusic',
} as const

/**
 * Chromeのメッセージパッシングに使用するメッセージの種別
 */
export type MessageType = typeof MessageType[keyof typeof MessageType]
