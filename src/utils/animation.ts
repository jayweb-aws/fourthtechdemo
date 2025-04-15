export const bottomToTopInit = {
    y: 80
}
export const bottomToTopAnimation = {
    y: 0,
    transition: {
        type: "tween",
        duration: 1.5,
    }
}

export const bannerTextBottomInit = {
    y: 200
}
export const bannerTextBottomAnimation = {
    y: 0,
    transition: {
        type: "keyframes",
        duration: 1
    }
}

export const leftToRightInit = {
    x: -100
}

export const leftToRightAnimation = {
    x: 0,
    transition: {
        type: "tween",
        duration: 1,
    }
}

export const rightToLeftInit = {
    x: 100
}

export const rightToLeftAnimation = {
    x: 0,
    transition: {
        type: "tween",
        duration: 2,
    }
}

export const pandaAnimationInit = {
    scale: 0.8
}
export const pandaAnimation = {
    scale: [0.8, 0.9, 0.8],
    transition: {
        type: "tween",
        repeat: Infinity,
        repeatType: "mirror",
        duration: 2,
        ease: "easeInOut",
    }
}

export const colorAnimationInit = {
    x: -100,
    y: -100,
}
export const colorAnimation = {
    x: [-100, 100],
    y: [0, 0],
    transition: {
        type: "tween",
        duration: 4,
        repeat: Infinity,
        repeatDelay: .5,
    }
}


// parent and child animation
export const containerAnimation = {
    hidden: { opacity: 1, },
    visible: {
        opacity: 1,
        transition: {
            duration: 2,
            delayChildren: 0.2,
            staggerChildren: 0.3,
        },
    },
};

// item animation
export const itemAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 2
        },
    },
};