// 開発時のホットリロード用
// 本番ビルドでは処理は実行されない
import 'mv3-hot-reload/content'
import { FetchMusicMessage } from '../models/messages/fetch-music/fetch-music-message'
import { FetchMusicResponse } from '../models/messages/fetch-music/fetch-music-response'

const audioElements: HTMLAudioElement[] = []

document.querySelectorAll('#itemList dl.item').forEach((item) => {
    const linkAnchor = item.querySelector(
        'dd.image a'
    ) as HTMLAnchorElement | null
    const idMatchArray = linkAnchor?.href?.match(/play(\d+).html/)
    if (idMatchArray && idMatchArray[1]) {
        const id = idMatchArray[1]
        const audio = document.createElement('audio')
        audio.id = id
        audio.controls = true
        audio.src = `https://dova2.heteml.net/dova/mp3/${id}.mp3`

        item.appendChild(audio)
        audioElements.push(audio)

        const message: FetchMusicMessage = {
            type: 'FetchMusic',
            url: 'https://dova2.heteml.net/dova/mp3/17593.mp3',
        }
        chrome.runtime.sendMessage(message, (response: FetchMusicResponse) => {
            console.log(response)
        })
    }
})

audioElements.forEach((audio) => {
    // 再生時に他のaudio要素の再生を止める
    audio.addEventListener('play', (ev) => {
        const eventTarget = ev.target as HTMLAudioElement
        audioElements
            .filter((a) => a.id !== eventTarget.id)
            .forEach((a) => a.pause())
    })
})
