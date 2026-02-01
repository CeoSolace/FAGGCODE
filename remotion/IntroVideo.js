import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import { AbsoluteFill, Sequence, Audio, Img } from 'remotion';
import { loadFont } from '@remotion/google-fonts/Montserrat';

const { fontFamily } = loadFont();

export const IntroVideo = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Fade-in opacity from 0 to 1 over the first second (equivalent to original fade)
  const titleOpacity = interpolate(frame, [0 * fps, 1 * fps], [0, 1], { extrapolateRight: 'clamp' });

  // Scale from 1 to 1.2 over the first second (adjusted to start from 1 assuming original intent; original 'by: 1.2' might mean multiply by 1.2)
  const titleScale = interpolate(frame, [0 * fps, 1 * fps], [1, 1.2], { extrapolateRight: 'clamp' });

  // Subtitle fade-in opacity from 0 to 1 starting at 5 seconds
  const subtitleOpacity = interpolate(frame, [5 * fps, 6 * fps], [0, 1], { extrapolateRight: 'clamp' });

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
