import { BaseMessage } from '../base-message'
import { FetchMusicMessage } from './fetch-music-message'

export const isFetchMusicMessage = (
    message: BaseMessage
): message is FetchMusicMessage => {
    return message.type == 'FetchMusic'
}
