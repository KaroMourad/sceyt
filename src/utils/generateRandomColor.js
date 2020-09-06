export function generateRandomColor()
{
    return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
}
