import { useState } from "react";
import { getChannelAPI } from "@/api/channel";
import { useEffect } from "react";

function useChannleList (){
    const [channels, setChannles] = useState([]);
    useEffect(() => {
      async function getChannel() {
        const channelRes = await getChannelAPI();
        setChannles(channelRes.data.channels);
      }
      getChannel();
    }, []);

    return{
        channels
    }
}

export {useChannleList}