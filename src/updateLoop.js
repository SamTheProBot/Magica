/** @type {HTMLCanvasElement} */
import { Map } from "./declare";
import { WeatherMetaData } from "./meta/weather";
import { ReadGameObjectArray, OverWrightGameObjectArray } from "./store/gameObject";
import { collision, collisionDirection } from "./util/collision";
import { EventMaping } from "./util/eventBinding";
import { eventEmmiter } from "./util/eventBinding";


export const UpdateGameLoop = (camera) => {
  let Player = ReadGameObjectArray().filter((obj) => obj.type === 'player');
  let CollisionBoundries = ReadGameObjectArray().filter((obj) => obj.type === 'collision');
  let LocationBoundries = ReadGameObjectArray().filter((obj) => obj.type === 'location')
  let Enemy = ReadGameObjectArray().filter((obj) => obj.type === 'enemy');
  let Weather = ReadGameObjectArray().filter((obj) => obj.type === 'weather');

  Map.draw(camera)

  Player.forEach((plr) => {
    plr.draw(camera);
    Enemy.forEach((eny) => {
      eny.draw(camera)
      if (collision(plr.equipedWeapon.collisionBoundries(), eny.collisionBoundries())) {
        eny.damageTaken(plr.equipedWeapon.damage);
      }

      if (collision(plr.collisionBoundries(), eny.collisionBoundries())) {
        eventEmmiter.emit(EventMaping.COLLISION_PLAYER, collisionDirection(plr.collisionBoundries(), eny.collisionBoundries()))
        console.log('Tooclose')
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
  Weather.forEach((drops) => {
    drops.draw(camera)
  })
  OverWrightGameObjectArray(ReadGameObjectArray().filter((obj) => obj.dead !== true))
}
