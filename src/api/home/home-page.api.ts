import { db } from '../../components/App/Auth/firebase.config';

export async function getTilesData() {
  const tiles = await db
    .collection("tools")
    .get()
    .then((querySnapshot) => {
      const tmpTile: any = [];
      querySnapshot.forEach((doc: any) => {
        tmpTile.push(doc.data());
      });
      return tmpTile;
    });
        
  return tiles;
};