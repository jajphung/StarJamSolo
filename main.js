title = "STARFALL";

description = `
[Tap] Turn
`;

characters = [
  `
lll
lll
  `
];

options = {
  theme: "dark",
  isPlayingBgm: true
};

let stars;
let player;

function update() {
  if (!ticks) {
    player = {x: 20, vx: 1};
    stars = times(20, () => {
      const posX = rnd(2, 97);
      return {
        pos: vec(posX, 90),
        speed: rnd(0.5, 1)
      };
    });
  }

  color("black");
  box(50, 100, 200, 18);

  stars.forEach((s) => {
    s.pos.y += s.speed;
    if (s.pos.y > 90) s.pos.y = 0;
    color("yellow");
    box(s.pos, 1);
  });

  if (input.isJustPressed) {
    addScore(1);
    player.vx *= -1;
  }
  player.x += player.vx;
  color("red");
  char("a", player.x, 90);

  if ((player.x < 0) || (player.x > 99)) {
    play("coin");
    end();
  }
  if (char("a", player.x, 90).isColliding.rect.yellow) {
    play("coin");
    end();
  }
}

addEventListener("load", onLoad);

//crisp-game-lib template from Thomas Noell, shared in the Discord server
//https://github.com/OfficialThomas/crisp-template

//code based off ABA Games Thunder
//https://github.com/abagames/crisp-game-lib-games/blob/main/docs/thunder/main.js

//code based off Juno Nguyen's Charge Rush RE tutorial
//https://github.com/JunoNgx/crisp-game-lib-tutorial

//https://abagames.github.io/crisp-game-lib/ref_document/modules.html
//https://github.com/abagames/crisp-game-lib-games/tree/main/docs