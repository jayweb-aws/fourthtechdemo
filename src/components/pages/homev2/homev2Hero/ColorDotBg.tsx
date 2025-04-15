import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { } from '../../../../utils/animation';
import colorDotImg from '../../../../assets/homev2/color1.png';
import colorDot2Img from '../../../../assets/homev2/color2.png';
import colorDot3Img from '../../../../assets/homev2/color3.png';

const ColorDotBg = () => {
    return (
        <div className='absolute left-[20px] top-[20px]'>
            <motion.div
                animate={{
                    x: [-60, 60],
                    y: [0, 0],
                }}
                transition={{
                    type: "tween",
                    duration: 4,
                    repeat: Infinity,
                    repeatDelay: .4,
                }}
                initial={{
                    x: -100,
                    y: -100,
                }}
            >
                <Image
                    src={colorDot3Img} alt="dot" />
            </motion.div>
            <motion.div
                animate={{
                    x: [-100, 100],
                    y: [0, 0],
                }}
                transition={{
                    type: "tween",
                    duration: 5,
                    repeat: Infinity,
                    repeatDelay: .5,
                }}
                initial={{
                    x: -100,
                    y: -100,
                }}
            >
                <Image
                    src={colorDot2Img} alt="dot" />
            </motion.div>
            <motion.div
                animate={{
                    x: [-40, 40],
                    y: [0, 0],
                }}
                transition={{
                    type: "tween",
                    duration: 5,
                    repeat: Infinity,
                    repeatDelay: .5,
                }}
                initial={{
                    x: -100,
                    y: -100,
                }}
            >
                <Image
                    src={colorDotImg} alt="dot" />
            </motion.div>
        </div>
    );
};

export default ColorDotBg;