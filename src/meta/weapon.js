export const WeaponMetaData = {
  Axe: {
    type: `melee`,
    height: 25,
    width: 5.5,
    Image: '../Items/Weapons/Axe/Sprite.png'
  },
  Bow: {
    type: `range`,
    height: 6,
    width: 14,
    Image: '../Items/Weapons/Bow/Sprite.png',
    Projectile: {
      Image: '../FX/Projectile/Arrow.png',
      height: 6,
      width: 14,
      frames: 1,
      duration: 6,
    }
  },
  Hammer: {
    type: `melee`,
    height: 15,
    width: 7.5,
    Image: '../Items/Weapons/Hammer/Sprite.png'
  },
  Katana: {
    type: `melee`,
    height: 20,
    width: 5,
    Image: '../Items/Weapons/Katana/Sprite.png'
  },
  Lance: {
    type: `melee`,
    height: 25,
    width: 5.5,
    Image: '../Items/Weapons/Lance/Sprite.png'
  },
  Shuriken: {
    type: `range`,
    height: 24,
    width: 6,
    Image: '',
    Projectile: {
      Image: '../FX/Projectile/Shuriken.png',
      height: 16,
      width: 16,
      frames: 2,
      duration: 6,
    }
  },
  Sword: {
    type: `melee`,
    height: 22,
    width: 5.5,
    Image: '../Items/Weapons/Sword/Sprite.png'
  },
  Staff: {
    type: `range`,
    height: 24,
    width: 6,
    Image: '../Items/Weapons/Staff/Sprite.png',
    Projectile: {
      Image: '../FX/Projectile/Fireball.png',
      height: 16,
      width: 16,
      frames: 4,
      duration: 5,
    }
  },
  Spear: {
    type: `melee`,
    height: 27,
    width: 6,
    Image: '../Items/Weapons/Spear/Sprite.png'
  },
  Sai: {
    type: `melee`,
    height: 25,
    width: 5.5,
    Image: '../Items/Weapons/Sai/Sprite.png'
  }
}
