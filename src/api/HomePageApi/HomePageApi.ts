import firebase from 'firebase';
import 'firebase/firestore';
import '../../firebaseConfig';
const db = firebase.firestore();

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