import { useEffect, useState } from "react";
import { db } from "./firebase";
import {
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc,
} from "firebase/firestore";

function App() {
    const [namaBarang, setNamaBarang] = useState("");
    const [barang, setBarang] = useState([]);

    const barangRef = collection(db, "barang");

    const getBarang = async () => {
        const data = await getDocs(barangRef);
        setBarang(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    useEffect(() => {
        getBarang();
    }, []);

    const tambahBarang = async () => {
        if (namaBarang.trim() === "") return;
        await addDoc(barangRef, { nama: namaBarang });
        setNamaBarang("");
        getBarang();
    };

    const hapusBarang = async (id) => {
        const barangDoc = doc(db, "barang", id);
        await deleteDoc(barangDoc);
        getBarang();
    };

    return (
        <div style={{ padding: 20 }}>
            <h2>Data Barang</h2>
            <input
                type="text"
                value={namaBarang}
                onChange={(e) => setNamaBarang(e.target.value)}
                placeholder="Nama barang"
            />
            <button onClick={tambahBarang}>Tambah</button>

            <ul>
                {barang.map((item) => (
                    <li key={item.id}>
                        {item.nama}{" "}
                        <button onClick={() => hapusBarang(item.id)}>
                            Hapus
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
