// 開発時のホットリロード用
// 本番ビルドではバンドルされない
import 'mv3-hot-reload/background'

import { BaseMessage } from '../models/messages/base-message'
import { fetchMusic } from '../models/messages/fetch-music/fetch-music'
import { isFetchMusicMessage } from '../models/messages/fetch-music/is-fetch-music-message'

chrome.runtime.onMessage.addListener(
    (message: BaseMessage, _, sendResponse) => {
        if (isFetchMusicMessage(message)) {
            fetchMusic(message.url).then((response) => sendResponse(response))
        }

        return true
    }
)
