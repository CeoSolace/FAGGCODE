// remotion/Root.js
import { Composition } from 'remotion';
import { IntroVideo } from './IntroVideo';

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="FreeAgentsIntro"
        component={IntroVideo}
        durationInFrames={900}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
