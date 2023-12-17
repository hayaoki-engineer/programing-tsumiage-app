import { useCallback, useEffect, useState } from "react";
import "./css/App.css";
import "./css/modal.css"
import { Kirokus } from "./types/Kirokus";
import { Today } from "./types/Today";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "./firebase";


function App() {
  /* モーダルに表示する日付をリアルタイムで取得 */
  const dateGet = new Date();
  const date: string = dateGet.getFullYear() + "." + (dateGet.getMonth() + 1) + "." + dateGet.getDate();
  console.log(date);

  /* 記録のモックデータ */
  const kiroku1 = new Kirokus("1", "React", "Udemy入門", "3", "30");
  const today1 = new Today("1", date, [kiroku1]);

  /* useStateで記録（日付け,カテゴリ、内容、時間）を管理 */
  const [kirokus, setKiroku] = useState([today1]);

  /* useStateでinputに入力された値を管理 */

  // 内容 //
  const [inputCategory, setInputCategory] = useState("");
  const [inputDetail, setInputDetail] = useState("");
  const [inputHours, setInputHours] = useState("");
  const [inputMinutes, setInputMinutes] = useState("");

  /* モーダル */
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isModalOpen]);

  // 記録を一覧に登録する関数
  const registerKiroku = () => {
    const newKiroku = kirokus.map((kiroku) => {
      return new Today(kiroku.id, kiroku.date, [
        ...kiroku.memories,
        new Kirokus(
          (Math.random() * 10000).toString(),
          inputCategory,
          inputDetail,
          inputHours,
          inputMinutes
        ),
      ]);
    });

    setKiroku(newKiroku);
    setIsModalOpen(false);
  };
  /* モーダル */

  const [hoursResults, setHoursResults] = useState()
  const q = query(collection(db, "constants"));

  useEffect(() => {
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.docs.forEach((doc) =>
      console.log(doc.id, doc.data())
      );
      
    })
  }, [])

  return (
    <>
      <button className="create-button" onClick={() => setIsModalOpen(true)}>
        積み上げを記録
      </button>
      {isModalOpen && (
        <>
          <div className="modal-bg"></div>
          <div className="modal-box">
            <p className="modal-form-title">積み上げを記録する</p>
            <button className="close-button" onClick={closeModal}>
              Close Modal
            </button>
            {kirokus.map((kiroku) => {
              return <p className="create-date">{kiroku.date}</p>;
            })}
            <div className="modal-form">
              <div className="modal-label">
                <label>カテゴリ</label>
                <label>内容</label>
                <label>時間</label>
              </div>
              <div className="modal-input-item">
                <input
                  type="text"
                  onChange={(e) => setInputCategory(e.target.value)}
                />
                <input
                  className="input-detail"
                  type="text"
                  value={inputDetail}
                  onChange={(e) => setInputDetail(e.target.value)}
                />
                <div className="modal-select-time">
                  <div className="select-time-item">
                    <select onChange={(e) => setInputHours(e.target.value)}>
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                    <span>時間</span>
                  </div>
                  <div className="select-time-item">
                    <select onChange={(e) => setInputMinutes(e.target.value)}>
                      <option value="0">0</option>
                      <option value="15">15</option>
                      <option value="30">30</option>
                      <option value="45">45</option>
                    </select>
                    <span>分</span>
                  </div>
                </div>
              </div>
              <div className="modal-button-wrapper">
                <button
                  className="button-base cancel-button"
                  onClick={closeModal}
                >
                  キャンセル
                </button>
                <button
                  className="button-base register-button"
                  onClick={registerKiroku}
                >
                  登録する
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      <ul className="kiroku-list">
        {kirokus.map((kiroku) => {
          return (
            <li key={kiroku.id}>
              <p className="date">{kiroku.date}</p>
              {kiroku.memories.map((memory) => {
                return (
                  <div key={memory.id} className="kiroku-list-item">
                    <div className="kiroku-left">
                      <p className="category">{memory.category}</p>
                      <p className="contents">{memory.contents}</p>
                    </div>
                    <div className="kiroku-right">
                      <p className="time">
                        {memory.hours}時間
                      </p>
                      <p className="time">
                        {memory.minutes}分
                      </p>
                    </div>
                  </div>
                );
              })}
            </li>
          );
        })}
        {/* <li className='kiroku-list-item'>
          <div className='kiroku-left'>
            <p className='category'>TypeScript</p>
            <p className='contents'>Udemy「超TypeScript入門」</p>
          </div>
          <p className='time'>3時間</p>
        </li> */}
      </ul>
    </>
  );
}

export default App;
