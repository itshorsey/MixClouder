import React from 'react'

const DetailPanel = (selectedMix) => {
    //console.log(`from template: `, selectedMix)
    const mixcloudIframeCall = selectedMix.mix.key.split('/')
    const mxStation = mixcloudIframeCall[1]
    const mxName = mixcloudIframeCall[2]
    const mxURL = `https://www.mixcloud.com/widget/iframe/?light=1&feed=%2F${mxStation}%2F${mxName}%2F`

    return (
        <iframe width="100%" height="400" src={mxURL} frameborder="0" ></iframe>
    )
}

export default DetailPanel