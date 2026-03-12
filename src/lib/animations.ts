export const appEasing = [0.25, 0.1, 0.25, 1] as const;

export const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: appEasing } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.3, ease: appEasing } },
};

export const staggerContainer = {
  animate: { transition: { staggerChildren: 0.06 } },
};

export const fadeUpItem = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: appEasing } },
};

export const scaleOnHover = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.98 },
  transition: { duration: 0.2, ease: appEasing },
};
