console.log("hell oh");
const para = document.querySelector("p");
console.log(para);

para.style.color = "lightblue";
para.style.fontSize = "48px";
para.textContent =
	"Lorem ipsum dolor amet viral meh selfies drinking vinegar, intelligentsia poke flannel twee paleo enamel pin cray. Banjo celiac crucifix, kickstarter la croix air plant jianbing hashtag vinyl hell of man bun selvage schlitz banh mi. Tacos hella raclette quinoa blog, williamsburg adaptogen tbh. Hexagon af stumptown lumbersexual synth gentrify quinoa enamel pin celiac master cleanse. Truffaut typewriter shoreditch, semiotics iceland mixtape taxidermy umami distillery austin hashtag. Food truck synth wayfarers, street art banh mi actually authentic. Bitters tousled tattooed vegan neutra pug hell of fixie chia unicorn letterpress.";

const item13 = document.querySelector("#item-13");
console.log(item13);
item13.style.opacity = "0.5";

const item3 = document.querySelector("#item-3");

item3.textContent = `I say, \"Hi!\"`;

const image = document.querySelector("img");

image.src = "http://www.tioxic.com/wp-content/uploads/trex_4.jpg";
image.height = "300";

const items = document.querySelectorAll(".item")
console.log(items[15])


items[15].textContent = `Won\'t get fooled again.`