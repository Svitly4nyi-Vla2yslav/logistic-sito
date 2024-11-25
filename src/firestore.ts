import  {db}  from "./firebase";
import { collection, addDoc } from "firebase/firestore";

export const saveFormData = async (formData: any) => {
  try {
    const docRef = await addDoc(collection(db, "formSubmissions"), formData);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
