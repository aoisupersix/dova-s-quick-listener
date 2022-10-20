/**
 * 音楽の取得結果
 */
export interface FetchMusicResponse {
    /**
     * 取得結果
     */
    result: 'ok' | 'fail'

    /**
     * レスポンスメッセージ
     */
    responseMessage: string

    /**
     * 取得した音楽
     */
    music?: Blob
}
