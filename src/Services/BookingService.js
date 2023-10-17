import { db } from "../firebase";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const appoinmentCollectionRef = collection(db, "appoinments");
class appoinmentDataService {

  addBooking= (newBooking) => {
    return addDoc(appoinmentCollectionRef, newBooking);
  };

  updateDoctor = (id, updatedDoctor) => {
    const doctorDoc = doc(db, "doctors", id);
    return updateDoc(doctorDoc, updatedDoctor);
  };

  deleteBooking = (id) => {
    const appoinmentDoc = doc(db, "appoinments", id);
    return deleteDoc(appoinmentDoc);
  };

  getAllBookings = () => {
    return getDocs(appoinmentCollectionRef);
  };

  getStudent = (id) => {
    const studentDoc = doc(db, "students", id);
    return getDoc(studentDoc);
  };
}

export default new appoinmentDataService();