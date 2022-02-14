class TriangleGameObject extends GameObject
{
    constructor(context, x, y, triangleWidth, triangleHeight, r, g, b)
    {
        super();
        this.components.filter(c=>c.update)
    }
}