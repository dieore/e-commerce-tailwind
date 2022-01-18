import { db } from "../lib/firebase.config";
import { collection, getDocs, addDoc, doc, deleteDoc, getDoc, updateDoc } from "firebase/firestore";

class CRUD {
    constructor(model) {
        this.collectionRef = collection(db, model);
        this.model = model;
        this.docRef;
    }

    async find() {
        const list = [];
        const res = await getDocs(this.collectionRef);
        res.docs.forEach(doc => {
            list.push({ ...doc.data(), id: doc.id })
        })
        return list;
    }

    async findById(id) {
        this.docRef = doc(db, this.model, id);
        return await getDoc(this.docRef);
    }

    async create(data) {
        return await addDoc(this.collectionRef, data);
    }

    async update(id, data) {
        this.docRef = doc(db, this.model, id);
        return await updateDoc(this.docRef, data);
    }

    async delete(id) {
        this.docRef = doc(db, this.model, id);
        return await deleteDoc(this.docRef);
    }
}

export default CRUD;