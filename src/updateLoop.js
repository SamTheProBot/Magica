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
  let Item = ReadGameObjectArray().filter((obj) => obj.type === 'item')
  let Weather = ReadGameObjectArray().filter((obj) => obj.type === 'weather');

  Map.draw(camera)

  Player.forEach((plr) => {
    console.log(plr.positionX, plr.positionY)
    plr.draw(camera);
    Enemy.forEach((eny) => {
      eny.draw(camera)
      if (collision(plr.equipedWeapon.collisionBoundries(), eny.collisionBoundries())) {
        eny.damageTaken(plr.equipedWeapon.damage);
      }

    })
    LocationBoundries.forEach((boundry) => {
      boundry.draw(camera)
      if (collision(boundry.collisionBoundries(), plr.collisionBoundries())) {
        eventEmmiter.emit(EventMaping.SWITCH_MAP, boundry.location)
      }
    })

    CollisionBoundries.forEach((boundry) => {
      boundry.draw(camera)
      if (collision(boundry.collisionBoundries(), plr.collisionBoundries())) {
        eventEmmiter.emit(EventMaping.COLLISION_BOUNDARY, collisionDirection(plr.collisionBoundries(), boundry.collisionBoundries()))
      }
    })

    Item.forEach((item) => {
      item.draw(camera)
      if (collision(plr.collisionBoundries(), item.collisionBoundries())) {
        switch (item.kind) {
          case 'score':
            eventEmmiter.emit(EventMaping.COLLISION_ITEM_SCORE, [item.score, item.index])
            item.dead = true;
            break;
          case 'food':
            eventEmmiter.emit(EventMaping.COLLISION_ITEM_FOOD, item.index)
            item.dead = true;
            break;
          case 'weapon':
            eventEmmiter.emit(EventMaping.COLLISION_ITEM_WEAPON, [item.name, item.index])
            item.dead = true;
        }
      }
    })
  })


  Weather.forEach((drops) => {
    drops.draw(camera)
  })
  OverWrightGameObjectArray(ReadGameObjectArray().filter((obj) => obj.dead !== true))
}
