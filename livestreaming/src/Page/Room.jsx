import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {

    const {roomId} = useParams()

    function randomID(len) {
        let result = '';
        if (result) return result;
        var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
          maxPos = chars.length,
          i;
        len = len || 5;
        for (i = 0; i < len; i++) {
          result += chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return result;
      }



    let myMeeting = async (element) => {
        const appID = 1957912630;
        const serverSecret = "0563d184c0a1c7c1591551e38147e349";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret,
             roomId, randomID(5),  randomID(5));
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            scenario: {
             mode: ZegoUIKitPrebuilt.LiveStreaming,
          
            },
           sharedLinks:[{
            name:"copy link",
            url:`http://localhost:3000/room/${roomId}`
           }]
       });
    } 
  return (
    <Box mt="2rem" ref={myMeeting}>
    </Box>
  );
};

export default Room;
