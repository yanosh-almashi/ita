import { db } from '../../firebase/firebase.config';

export async function getTilesData() {
  const tiles = await db
    .collection('tools')
    .get()
    .then((querySnapshot: any) => {
      const tmpTile: any = [];
      querySnapshot.forEach((doc: any) => {
        tmpTile.push(doc.data());
      });
      return tmpTile;
    });

  return tiles;
}
