'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| আমাদের শুরু?" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        কখনো কি প্রেজেন্টেশন বানাতে গিয়ে মাথা খারাপ হয়ে গেছে? বন্ধুদের কাছ থেকে টিজ বা শিক্ষকদের কাছ থেকে "মেহ" রকমের ফিডব্যাক পেয়েছো? আমিও একসময় এমন ছিলাম। এ কারণেই আমি এখানে আছি—তোমাকে সেই ঝামেলা থেকে বাঁচাতে! চল, একসাথে কাজ করি, যাতে তুমি এমন স্লাইড বানাতে পারো যা বন্ধুদের এবং শিক্ষকদেরও মুগ্ধ করবে, ঝামেলা ছাড়াই।
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
