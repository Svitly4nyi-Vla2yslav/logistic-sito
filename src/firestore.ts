// import  {db}  from "./firebase";
// import { collection, addDoc } from "firebase/firestore";

// export const saveFormData = async (formData: any) => {
//   try {
//     const docRef = await addDoc(collection(db, "formSubmissions"), formData);
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// };
// const testFormData = {
//   name: "John Doe",
//   email: "john.doe@example.com",
//   message: "Hello, this is a test!",
// };

// saveFormData(testFormData)
//   .then(() => console.log("Data saved successfully"))
//   .catch((error) => console.error("Error saving data:", error));