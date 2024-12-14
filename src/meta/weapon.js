export const WeaponMetaData = {
  axe: {
    type: `melee`,
    name: `axe`,
    height: 25,
    width: 5.5,
    damage: 20,
    Image: '../Items/Weapons/Axe/Sprite.png'
  },
  bow: {
    type: `range`,
    name: `bow`,
    height: 6,
    width: 14,
    damage: 20,
    Image: '../Items/Weapons/Bow/Sprite.png',
    Projectile: {
      Image: '../FX/Projectile/Arrow.png',
      height: 6,
      width: 14,
      frames: 1,
      duration: 6,
    }
  },
  hammer: {
    type: `melee`,
    name: `hammer`,
    height: 15,
    width: 7.5,
    damage: 20,
    Image: '../Items/Weapons/Hammer/Sprite.png'
  },
  katana: {
    type: `melee`,
    name: `katana`,
    height: 20,
    width: 5,
    damage: 20,
    Image: '../Items/Weapons/Katana/Sprite.png'
  },
  shuriken: {
    type: `range`,
    name: `shuriken`,
    height: 24,
    width: 6,
    damage: 20,
    Image: '',
    Projectile: {
      Image: '../FX/Projectile/Shuriken.png',
      height: 16,
      width: 16,
      frames: 2,
      duration: 6,
    }
  },
  sword: {
    type: `melee`,
    name: `sword`,
    height: 22,
    width: 5.5,
    damage: 15,
    Image: '../Items/Weapons/Sword/Sprite.png'
  },
  staff: {
    type: `range`,
    name: `staff`,
    height: 24,
    width: 6,
    damage: 20,
    Image: '../Items/Weapons/Staff/Sprite.png',
    Projectile: {
      Image: '../FX/Projectile/Fireball.png',
      height: 16,
      width: 16,
      frames: 4,
      duration: 5,
    }
  },
  spear: {
    type: `melee`,
    name: `spear`,
    height: 30,
    width: 6,
    damage: 10,
    Image: '../Items/Weapons/Spear/Sprite.png'
  },
  sai: {
    type: `melee`,
    name: `sai`,
    height: 25,
    width: 5.5,
    damage: 20,
    Image: '../Items/Weapons/Sai/Sprite.png'
  }
}
