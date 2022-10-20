import { FetchMusicResponse } from './fetch-music-response'

/**
 * 引数に指定されたURLの音楽を取得します。
 * @param url 音楽のURL
 * @returns 音楽の取得結果
 */
export const fetchMusic = async (url: string): Promise<FetchMusicResponse> => {
    const response = await fetch(url)
    if (!response.ok) {
        return { result: 'fail', responseMessage: response.statusText }
    }

    return {
        result: 'ok',
        responseMessage: response.statusText,
        music: await response.blob(),
    }
}
