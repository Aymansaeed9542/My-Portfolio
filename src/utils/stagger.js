export const getStaggerStyle = (order = 0, baseMs = 200, stepMs = 150) => {
    const delayMs = Math.max(0, baseMs + order * stepMs);
    return { transitionDelay: `${delayMs}ms` };
};


