const fakeTiles: any = [
  {
    id: "001",
    name: "House",
    icon: "fa-home",
    text: "text",
  },
  {
    id: "002",
    name: "Random",
    icon: "fa-cogs",
    text: "text",
  },
];

// export async function getTilesData() {
//   const tiles = await new Promise((resolve) => {
//     resolve(fakeTiles);
//   })
//   return tiles;
// };

export default {
  get: jest.fn().mockResolvedValue(fakeTiles)
};