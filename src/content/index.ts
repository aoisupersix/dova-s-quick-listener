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
