import { motion } from "framer-motion";

export const MotionDiv = motion.div;

type SlideIn = {
  children: React.ReactNode;
  className?: string;
  from?: number;
  to?: number;
  delay?: number;
  duration?: number;
};

export function SlideInVertical({
  children,
  className,
  from,
  to,
  delay,
  duration,
}: SlideIn) {
  return (
    <MotionDiv
      className={className}
      initial={{ y: from ? from : -100, opacity: 0 }}
      animate={{ y: to ? to : 0, opacity: 1 }}
      transition={{
        duration: duration ? duration : 0.5,
        delay: delay ? delay : 0,
      }}
    >
      {children}
    </MotionDiv>
  );
}

export function SlideInHorizontal({
  children,
  className,
  from,
  to,
  delay,
  duration,
}: SlideIn) {
  return (
    <MotionDiv
      className={className}
      initial={{ x: from ? from : -100, opacity: 0 }}
      whileInView={{ x: to ? to : 0, opacity: 1 }}
      transition={{
        duration: duration ? duration : 0.5,
        delay: delay ? delay : 0,
      }}
    >
      {children}
    </MotionDiv>
  );
}

export function FadeIn({
  children,
  className,
  delay,
  duration,
  from,
  to,
}: SlideIn) {
  return (
    <MotionDiv
      className={className}
      initial={{ opacity: from ? from : 0 }}
      whileInView={{ opacity: to ? to : 1 }}
      transition={{
        duration: duration ? duration : 0.5,
        delay: delay ? delay : 0,
      }}
    >
      {children}
    </MotionDiv>
  );
}

type MarqueeText = {
  children: React.ReactNode;
  className?: string;
};

export function MarqueeText({ children, className }: MarqueeText) {
  const marqueeVariants = {
    animate: {
      x: ['100%', '-100%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          ease: "linear",
        },
      },
    },
  };

  return (
    <MotionDiv className={className} variants={marqueeVariants} animate="animate" >
      {children}
    </MotionDiv>
  );
}

type Marquee = {
  MarqueeTrackClassName?: string;
  MarqueeTextClassName?: string;
  children: React.ReactNode;
};

export function Marquee({
  MarqueeTrackClassName,
  MarqueeTextClassName,
  children,
}: Marquee) {
  return (
    <div
      className={`relative overflow-x-hidden ${MarqueeTrackClassName}`}
    >
      <MarqueeText
        className={`absolute whitespace-nowrap w-full top-0 bottom-0 my-auto h-fit ${MarqueeTextClassName}`}
      >
        {children}
      </MarqueeText>
    </div>
  );
}
