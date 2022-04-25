import express, { json } from "express";

const app = express();
app.use(json());

const tweets = [];
const dadosUsuarios = [];

app.post("/sign-up", (req, res) => {
	const body = req.body;
	const usuario = {
		username: body.username,
		avatar: body.avatar,
	};
	dadosUsuarios.push(usuario);
	res.send("OK");
});

app.post("/tweets", (req, res) => {
	const body = req.body;
	const avatar = dadosUsuarios.find((img) => img.username === body.username);
	const tweet = {
		username: body.username,
		avatar: avatar.avatar,
		tweet: body.tweet,
	};
	tweets.push(tweet);
	res.send("OK");
});

app.get("/tweets", (req, res) => {
	let post = tweets.slice(-10);
	res.send(post);
});

app.listen(5000);
