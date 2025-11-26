export const fadeInAnimation = ({
  x = 0,
  y = 0,
  scale = 1,
  delay = 0,
  duration = 1.3,
  withExit = false,
}: {
  x?: number;
  y?: number;
  scale?: number;
  delay?: number;
  duration?: number;
  withExit?: boolean;
} = {}) => ({
  hidden: { opacity: 0, x, y, scale },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: { duration, delay, ease: "easeOut" },
  },
  ...(withExit && {
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  }),
});

export const listVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};
