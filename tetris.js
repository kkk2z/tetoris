const canvas = document.getElementById('gameScreen');
const ctx = canvas.getContext('2d');
const scale = 20;

// テトリミノの形状を定義
const shapes = [
    // I
    [
        [1, 1, 1, 1],
    ],
    // J
    [
        [1, 0, 0],
        [1, 1, 1],
    ],
    // L
    [
        [0, 0, 1],
        [1, 1, 1],
    ],
    // O
    [
        [1, 1],
        [1, 1],
    ],
    // S
    [
        [0, 1, 1],
        [1, 1, 0],
    ],
    // T
    [
        [1, 1, 1],
        [0, 1, 0],
    ],
    // Z
    [
        [1, 1, 0],
        [0, 1, 1],
    ],
];

// グリッドを初期化
function createMatrix(width, height) {
    const matrix = [];
    while (height--) {
        matrix.push(new Array(width).fill(0));
    }
    return matrix;
}

// テトリミノの衝突判定
function collide(arena, player) {
    const [m, o] = [player.matrix, player.pos];
    for (let y = 0; y < m.length; ++y) {
        for (let x = 0; x < m[y].length; ++x) {
            if (m[y][x] !== 0 &&
                (arena[y + o.y] &&
                    arena[y + o.y][x + o.x]) !== 0) {
                return true;
            }
        }
    }
    return false;
}

// グリッドとテトリミノを結合
function merge(arena, player) {
    player.matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                arena[y + player.pos.y][x + player.pos.x] = value
   }
  });
});
