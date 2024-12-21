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
  let Animals = ReadGameObjectArray().filter((obj) => obj.type === 'animals');
  let NPC = ReadGameObjectArray().filter((obj) => obj.type === 'npc');
  let Projectile = ReadGameObjectArray().filter((obj) => obj.type === 'projectile');
  let Animation = ReadGameObjectArray().filter((obj) => obj.type === 'animation')

  Map.draw(camera)
  Animals.forEach((animal) => {
    animal.draw(camera)
  })

  Weather.forEach((drops) => {
    drops.draw(camera)
  })

  NPC.forEach((npc) => {
    npc.draw(camera);
  })


  Projectile.forEach((proj) => {
    proj.draw(camera);
    Enemy.forEach((eny) => {
      if (collision(proj.collisionBoundries(), eny.collisionBoundries())) {
        eventEmmiter.emit(EventMaping.ANIMATION, [proj.ani, eny.positionX, eny.positionY])
        eny.damageTaken(proj.damage);
        proj.dead = true;
      }
    })
    LocationBoundries.forEach((boundry) => {
      boundry.draw(camera)
      if (collision(boundry.collisionBoundries(), proj.collisionBoundries())) {
        proj.dead = true;
      }
    })

    CollisionBoundries.forEach((boundry) => {
      boundry.draw(camera)
      if (collision(boundry.collisionBoundries(), proj.collisionBoundries())) {
        proj.dead = true;
      }
    })
  })
  Player.forEach((plr) => {
    //    console.log(plr.positionX, plr.positionY)
    plr.draw(camera);
    Enemy.forEach((eny) => {
      eny.draw(camera)
      if (collision(plr.equipedWeapon.collisionBoundries(), eny.collisionBoundries()) && plr.equipedWeapon.type === 'melee') {
        eny.damageTaken(plr.equipedWeapon.damage);
        eventEmmiter.emit(EventMaping.ANIMATION, [plr.equipedWeapon.ani, eny.positionX, eny.positionY]);
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

  Animation.forEach((ani) => {
    ani.draw(camera)
  })

  OverWrightGameObjectArray(ReadGameObjectArray().filter((obj) => obj.dead !== true))
}
