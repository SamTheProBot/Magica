
export const EnemyMetaData = {
  snake: {
    Image: Object.assign(new Image(), { src: "../../public/Actor/Monsters/Snake/Snake.png" }),
    Speed: 1.5,
    Range: 250,
    Hp: 100,
    Attack: 20,
  },
  skull: {
    Image: Object.assign(new Image(), { src: "../../public/Actor/Monsters/Skull/SpriteSheet.png" }),
    Speed: 1,
    Range: 450,
    Hp: 100,
    Attack: 20,
  },
  eye: {
    Image: Object.assign(new Image(), { src: "../../public/Actor/Monsters/Eye/Eye.png" }),
    Speed: 2.5,
    Range: 300,
    Hp: 50,
    Attack: 20,
  },
  bamboo: {
    Image: Object.assign(new Image(), { src: "../../public/Actor/Monsters/BambooYellow/SpriteSheet.png" }),
    Speed: 2,
    Range: 250,
    Hp: 100,
    Attack: 20,
  },
  mushroom: {
    Image: Object.assign(new Image(), { src: "../../public/Actor/Monsters/Mushroom/mushroom.png" }),
    Speed: 2,
    Range: 250,
    Hp: 100,
    Attack: 20,
  }
}
