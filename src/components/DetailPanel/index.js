import React from "react";

const DetailPanel = (selectedMix) => {
  //console.log(`from template: `, selectedMix)
  const mixcloudIframeCall = selectedMix.mix.key.split("/");
  const mxStation = mixcloudIframeCall[1];
  const mxName = mixcloudIframeCall[2];
  const mxURL = `https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&feed=%2F${mxStation}%2F${mxName}%2F`;

  return (
    <div className="fixed mb0 pb0 bottom-0 w-100 overflow-hidden h3">
      <iframe width="75%" src={mxURL} frameborder="0"></iframe>
    </div>
  );
};

export default DetailPanel;
