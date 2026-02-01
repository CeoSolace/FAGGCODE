import { useCurrentFrame, useVideoConfig } from 'remotion';
import { AbsoluteFill, Sequence, Audio, Img } from 'remotion';
import { fade, scale } from '@remotion/animation';
import { loadFont } from '@remotion/google-fonts/Montserrat';
const { fontFamily } = loadFont();
export const IntroVideo = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const titleOpacity = fade(frame, { from: 0 * fps, duration: 1 * fps });
  const titleScale = scale(frame, { from: 0 * fps, by: 1.2, duration: 1 * fps });
  const subtitleOpacity = fade(frame, { from: 5 * fps, duration: 1 * fps });
  return (
    <AbsoluteFill style={{ backgroundColor: '#1f2937', fontFamily }}>
      <Sequence from={0} durationInFrames={900}>
        <Img src="/assets/esports-bg.jpg" style={{ opacity: 0.8 }} />
      </Sequence>
      <Sequence from={0} durationInFrames={900}>
        <Audio src="/assets/intro-music.mp3" />
      </Sequence>
      <div
        style={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: `translate(-50%, -50%) scale(${titleScale})`,
          opacity: titleOpacity,
          color: 'white',
          fontSize: 80,
          textAlign: 'center',
        }}
      >
        Welcome to FreeAgents.ltd
      </div>
      <div
        style={{
          position: 'absolute',
          top: '60%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: subtitleOpacity,
          color: 'white',
          fontSize: 40,
          textAlign: 'center',
        }}
      >
        Connect, Sign, and Compete Across Multiple Esports Games
      </div>
    </AbsoluteFill>
  );
};
