import firestore, { addDoc, doc, getDoc, where } from "firebase/firestore";
import * as constants from "#/index";
import { db } from "@/core/db";
import { collection, updateDoc } from "firebase/firestore";
// import type { IUser } from "@/typings/user/User";

export async function createUser() {
  const fireStoreCollection = collection(
    db,
    constants.COLLECTION_NAME satisfies string as string
  );
  const doc = await addDoc(fireStoreCollection, {
    id: "",
    history: [{}],
  });
  await updateDoc(doc, {
    id: doc.id,
  });
  return doc.id as string satisfies string;
}
export async function getFireStoreUser(id: string) {
  const docRef = doc(db, constants.COLLECTION_NAME, id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    return docSnapshot.data();
  } else {
    console.log("No such document!");
    return null;
  }
}

export async function updateUser(id: string, data: object) {
  const docRef = doc(db, constants.COLLECTION_NAME, id);
  await updateDoc(docRef, data);
}
