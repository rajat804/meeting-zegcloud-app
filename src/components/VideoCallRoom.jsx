import { useParams } from "react-router-dom"
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const VideoCallRoom = () => {
    const { id }= useParams();
    const metting = (element) => {
      // generate kit token
       const appID = 1432955944;
      const serverSecret = "9ab1e1b6d07f56d7d2fdd11f39b38a0c";
      const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, id, Date.now().toString(), 'user');

      const zp = ZegoUIKitPrebuilt.create(kitToken);

      zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Personal link',
            url:
             window.location.protocol + '//' + 
             window.location.host + window.location.pathname
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
      });
    }
  return (
    <>
      <div
      className="myCallContainer"
      ref={metting}
      style={{ width: '100vw', height: '100vh' }}
    ></div>
    </>
  )
}

export default VideoCallRoom
