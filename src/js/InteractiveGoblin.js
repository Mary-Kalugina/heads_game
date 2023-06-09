import { setCountMonster, scoreControl } from "../index";
import MonsterControl from "./MonsterControl";

export default class InteractiveGoblin {
  constructor() {
    this.monsterControl = new MonsterControl();
  }
  monsterHit(e) {
    if (e.target.classList.contains("monster")) {
      this.hitCounter();
      e.target.classList.remove("monster");
      this.monsterControl.addMonster(this.monsterControl.randomCell());
      clearTimeout(this.timeoutId);
      this.startTimer();
    }
  }

  startTimer() {
    this.timeoutId = setTimeout(() => {
      this.monsterControl.changeCell();
      this.startTimer();
    }, 1000);
  }

  hitCounter() {
    scoreControl.score++;
    setCountMonster(0);
  }
}
