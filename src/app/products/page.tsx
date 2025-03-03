"use client"; // ✅ 클라이언트 컴포넌트로 설정

import { useEffect, useState } from "react";
import { db } from "@/app/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

export default function TestPage() {
  const [data, setData] = useState<{ id: string; message: string }[]>([]);

  // Firestore에 데이터 추가
  const addTestData = async () => {
    try {
      const docRef = await addDoc(collection(db, "testCollection"), {
        message: "Firebase 연동 확인!",
        createdAt: new Date(),
      });

      await fetchTestData();
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document:", error);
    }
  };

  // Firestore에서 데이터 가져오기
  const fetchTestData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "testCollection"));
      const dataArr = querySnapshot.docs.map((doc) => {
        const data = doc.data() as { message: string }; 
        return {
          id: doc.id,
          message: data.message, 
        };
      });
  
      setData(dataArr); 
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchTestData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">🔥 Firebase 연동 테스트</h1>
      <button onClick={addTestData} className="bg-blue-500 text-white p-2 rounded mt-4">
        Firestore에 테스트 데이터 추가
      </button>
      <button onClick={fetchTestData} className="bg-green-500 text-white p-2 rounded mt-4">
        Firestore 데이터 가져오기
      </button>
      <ul className="mt-4">
        {data.map((item) => (
          <li key={item.id} className="border p-2 mt-2">
            {item.message} (ID: {item.id})
          </li>
        ))}
      </ul>
    </div>
  );
}
