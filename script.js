const app = new PIXI.Application({width: window.innerWidth, height: window.innerHeight});
document.body.appendChild(app.view);

const img = new PIXI.Sprite.from("image.jpg");
img.width = window.innerWidth;
img.height = window.innerHeight;
app.stage.addChild(img);

const depthMap = new PIXI.Sprite.from("image-map.jpg");
app.stage.addChild(depthMap);

const displacementFilter = new PIXI.filters.DisplacementFilter(depthMap);
app.stage.filters = [displacementFilter];

window.onmousemove = function(e) {
    displacementFilter.scale.x = (window.innerWidth / 2 - e.clientX) / 40;
    displacementFilter.scale.y = (window.innerHeight / 2 - e.clientY) / 40;
}