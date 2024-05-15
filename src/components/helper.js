
export const classNames = (defCls= "", cls = {}) => {
    const items = []
    for (const k in cls) {
        if (cls[k]) {
            items.push(k)
        }
    }
    return (defCls ? defCls + " " : "") + items.join(" ")
}

export const calcPagination = (current, last, delta = 2) => {
    let range = [];
    let rangeWithDots = [];

    for (let i = 1; i <= last; i++) {
        if ((i === 1) || (i === last) || (i >= current - delta && i < current + delta + 1)) {
            range.push(i);
        }
    }

    let l;
    for (let i of range) {
        if (l) {
            if (i - l === 2) {
                rangeWithDots.push(l + 1);
            } else if (i - l !== 1) {
                rangeWithDots.push('…');
            }
        }
        rangeWithDots.push(i);
        l = i;
    }

    return rangeWithDots;
}