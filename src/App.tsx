import { useState } from "react";
import "./css/App.css";
import { Kirokus } from "./types/Kirokus";
import { Today } from "./types/Today";
import Modal from "./components/modal/Modal";

function App() {
  const kiroku1 = new Kirokus("1", "React", "Udemy入門", "3時間");
  const kiroku2 = new Kirokus("2", "React", "Udemy入門", "3時間");

  const today1 = new Today("1", "12.12", [kiroku1, kiroku2]);
  const today2 = new Today("2", "12.13", [kiroku1, kiroku2]);

  // useStateで記録を管理
  const [kirokus, setKiroku] = useState([today1, today2]);

  return (
    <>
      <Modal />
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
                    <p className="time">{memory.time}</p>
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
