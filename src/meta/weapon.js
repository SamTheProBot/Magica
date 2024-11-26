export const WeaponMetaData = {
  Axe: {
    type: `melee`,
    height: 25,
    width: 5.5,
    Image: '../../public/Items/Weapons/Axe/Sprite.png'
  },
  Bow: {
    type: `range`,
    height: 6,
    width: 14,
    Image: '../../public/Items/Weapons/Bow/Sprite.png',
    Projectile: {
      Image: '../../public/FX/Projectile/Arrow.png',
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
    Image: '../../public/Items/Weapons/Hammer/Sprite.png'
  },
  Katana: {
    type: `melee`,
    height: 20,
    width: 5,
    Image: '../../public/Items/Weapons/Katana/Sprite.png'
  },
  Lance: {
    type: `melee`,
    height: 25,
    width: 5.5,
    Image: '../../public/Items/Weapons/Lance/Sprite.png'
  },
  Shuriken: {
    type: `range`,
    height: 24,
    width: 6,
    Image: '',
    Projectile: {
      Image: '../../public/FX/Projectile/Shuriken.png',
      height: 16,
      width: 16,
      frames: 2,
      duration: 6,
    }
  },
  Sword: {
    type: `melee`,
    height: 20,
    width: 5,
    Image: '../../public/Items/Weapons/Sword/Sprite.png'
  },
  Staff: {
    type: `range`,
    height: 24,
    width: 6,
    Image: '../../public/Items/Weapons/Staff/Sprite.png',
    Projectile: {
      Image: '../../public/FX/Projectile/Fireball.png',
      height: 16,
      width: 16,
      frames: 4,
      duration: 5,
    }
  },
  Spear: {
    type: `melee`,
    height: 26,
    width: 5.5,
    Image: '../../public/Items/Weapons/Spear/Sprite.png'
  },
  Sai: {
    type: `melee`,
    height: 25,
    width: 5.5,
    Image: '../../public/Items/Weapons/Sai/Sprite.png'
  }
}
