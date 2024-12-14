const hammerFlame = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 6960, 6960, 6960, 6960, 6960, 6960, 6960, 6960, 6960, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 6960, 6960, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6960, 0, 0, 0, 6960, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 6960, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6960, 0, 0, 6960, 0, 6960, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 6960, 0, 0, 0, 0, 0, 6960, 6960, 0, 0, 0, 0, 0, 6960, 6960, 0, 0, 6960, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 6960, 0, 0, 0, 0, 0, 6960, 6960, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6960, 6960, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 6960, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6960, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 6960, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6960, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 6960, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6960, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 6960, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6960, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 6960, 6960, 6960, 6960, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6960, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6960, 0, 0, 0, 0, 0, 0, 0, 6960, 6960, 6960, 6960, 0, 0, 6960, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6960, 0, 0, 0, 6960, 6960, 6960, 0, 0, 0, 6960, 6960, 6960, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6970, 6970, 6970, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

export const HammerFlameDataArray = [];
for (let i = 0; i < hammerFlame.length; i += 30) {
    HammerFlameDataArray.push(hammerFlame.slice(i, i + 30));
}