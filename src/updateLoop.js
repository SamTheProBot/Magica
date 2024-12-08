/** @type {HTMLCanvasElement} */
import { Map } from "./declare";
import { ReadGameObjectArray, OverWrightGameObjectArray } from "./store/gameObject";
import { collision, collisionDirection } from "./util/collision";
import { EventMaping } from "./util/eventBinding";
import { eventEmmiter } from "./util/eventBinding";


export const UpdateGameLoop = (camera) => {
  let Player = ReadGameObjectArray().filter((obj) => obj.type === 'player');
  let CollisionBoundries = ReadGameObjectArray().filter((obj) => obj.type === 'collision');
  let LocationBoundries = ReadGameObjectArray().filter((obj) => obj.type === 'location')
  let Enemy = ReadGameObjectArray().filter((obj) => obj.type === 'enemy');

  Map.draw(camera)

  Player.forEach((plr) => {
    plr.draw(camera);
    console.log(plr.positionX, plr.positionY)
    Enemy.forEach((eny) => {
      eny.draw(camera)
      if (collision(plr.equipedWeapon.collisionBoundries(), eny.collisionBoundries())) {
        console.log(plr.equipedWeapon.positionX, plr.equipedWeapon.positionY, eny.positionX, eny.positionY)
      }
      if (collision(plr.collisionBoundries(), eny.collisionBoundries())) {
        eventEmmiter.emit(EventMaping.COLLISION_PLAYER, collisionDirection(plr.collisionBoundries(), eny.collisionBoundries()))
      }
    })
    LocationBoundries.forEach((boundry) => {
      boundry.draw(camera)
      if (collision(boundry.collisionBoundries(), plr.collisionBoundries())) {
        console.log(boundry.location)
        eventEmmiter.emit(EventMaping.SWITCH_MAP, boundry.location)
      }
    })

    CollisionBoundries.forEach((boundry) => {
      boundry.draw(camera)
      if (collision(boundry.collisionBoundries(), plr.collisionBoundries())) {
        eventEmmiter.emit(EventMaping.COLLISION_PLAYER, collisionDirection(plr.collisionBoundries(), boundry.collisionBoundries()))
      }
    })
  })
  OverWrightGameObjectArray(ReadGameObjectArray().filter((obj) => obj.dead !== true))
}
