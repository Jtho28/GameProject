class TriangleDrawComponent extends Component
{
    constructor(parent)
    {
        super(parent);
    }
    draw(ctx)
    {
        let updateComponent = this.parent.components.find(c=>c instanceof TriangleUpdateComponent);

        ctx.fillstyle = `rgb(${updateComponent.r}, ${updateComponent.g}, ${updateComponent.b})`
        ctx.strokestyle = "white"

        ctx.beginPath();
        ctx.moveTo(75,50);
        ctx.lineTo(100, 75);
        ctx.lineTo(100,25);
        
        ctx.fill();
        ctx.stroke();
    }

}
