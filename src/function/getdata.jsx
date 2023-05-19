import { useState, useEffect } from "react";
import { collection, getDocs} from "firebase/firestore";
import { db } from "../firebaseconfig";

export const Getdata = (id) => {
  const [parts, setParts] = useState([]);
  const partCollection = collection(db, id);
  useEffect(() => {
    const get = async () => {
      const data = await getDocs(partCollection);
      setParts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    get();
  }, []);
  return parts;
};
