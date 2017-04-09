import { Application, Container, Text } from 'pixi.js';

const app: Application = new Application(800, 600, { backgroundColor : 0x000000 });
app.view.style.position = 'absolute';
app.view.style.display = 'block';
document.body.appendChild(app.view);

const stage: Container = new Container();

const message: Text = new Text(
	'Hello Pixi!',
	{ fontFamily: 'Arial', fontSize: 32, fill: 'white' }
);

message.position.set(app.view.width / 2 - message.width / 2, app.view.height / 2 - message.height / 2);
stage.addChild(message);
app.renderer.render(stage);

function gameLoop(): void {
	requestAnimationFrame(gameLoop);
	app.renderer.render(stage);
}

gameLoop();
