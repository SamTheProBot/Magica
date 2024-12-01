/** @type {HTMLCanvasElement} */
import { Map } from "./declare";
import { ReadGameObjectArray } from "./store/gameObject";
import { collision } from "./util/collision";
import { EventMaping } from "./util/eventBinding";
import { eventEmmiter } from "./util/eventBinding";


export const UpdateGameLoop = (camera) => {
  let Player = ReadGameObjectArray().filter((obj) => obj.type === 'player');
  let CollisionBoundries = ReadGameObjectArray().filter((obj) => obj.type === 'collision');
  let LocationBoundries = ReadGameObjectArray().filter((obj) => obj.type === 'location')
  let Enemy = ReadGameObjectArray().filter((obj) => obj.type === 'enemy');

  Map.draw(camera)

  Player.forEach((plr) => {
    plr.draw();

    Enemy.forEach((eny) => {
      eny.draw(camera)
      if (collision(plr.collisionBoundries(), eny.collisionBoundries(), 16)) {
        console.log('attack!!')
      }
    })
    LocationBoundries.forEach((boundry) => {
      if (collision(boundry.collisionBoundries(), plr.collisionBoundries())) {
        console.log(boundry.location)
        eventEmmiter.emit(EventMaping.SWITCH_MAP, boundry.location)
      }
    })

    CollisionBoundries.forEach((boundry) => {
      boundry.draw(camera)
      if (collision(boundry.collisionBoundries(), plr.collisionBoundries())) {
        console.log('collision!!')
      }
    })
  })

}
