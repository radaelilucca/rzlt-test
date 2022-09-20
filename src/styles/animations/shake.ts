import { css, keyframes } from 'styled-components';

const shakeAnimationKeyframes = keyframes`
 10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
`;

const shakeAnimation = css`
  animation: ${shakeAnimationKeyframes} 200ms ease;
`;

export { shakeAnimation };
