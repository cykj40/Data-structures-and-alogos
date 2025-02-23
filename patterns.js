// Function to create a recursive diamond pattern
export const diamondPattern = (size, color1, color2, depth = 0) => {
    if (size < 10) return []; // Base case: stop when size is too small

    const currentColor = depth % 2 === 0 ? color1 : color2;

    // Create the diamond shape
    const diamond = {
        type: 'polygon',
        points: [
            [size / 2, 0],      // top
            [size, size / 2],    // right
            [size / 2, size],    // bottom
            [0, size / 2]        // left
        ],
        fill: currentColor
    };

    // Recursively create smaller diamonds
    const innerSize = size * 0.7; // Scale factor for inner diamonds
    const offset = (size - innerSize) / 2;

    return [
        diamond,
        ...diamondPattern(innerSize, color1, color2, depth + 1).map(shape => ({
            ...shape,
            points: shape.points.map(([x, y]) => [x + offset, y + offset])
        }))
    ];
};

console.log(diamondPattern(200, 'limegreen', 'rebeccapurple'));

// Example usage:
// diamondPattern(200, 'limegreen', 'rebeccapurple'); 