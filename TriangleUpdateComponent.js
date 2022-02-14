class TriangleUpdateComponent extends Component
{
    constructor(parent, context, x, y, triangleWidth, triangleHeight, r, g, b)
    {
        super(parent)
        this.context = context
        this.x = x
        this.y = y
        this.triangleWidth = triangleWidth
        this.triangleHeight = triangleHeight
        this.r = r
        this.g = g
        this.b = b
    }
    update()
    {
        this.b = 100
    }
}