import { useState } from 'react'
import './App.css'
import { Kirokus } from './Kirokus'
import { Today } from './Today'

function App() {

  const kiroku = new Kirokus("1", "React", "Udemy入門", "3時間")
  const today  = new Today("1", "12.12", [kiroku])
  
  // useStateで記録を管理
  const [kirokus, setKiroku] = useState([today])

  return (
    <>
      <ul className='kiroku-list'>
        {kirokus.map((kiroku) => {
          return (
            <li key={kiroku.id}>
              <p className='date'>{kiroku.date}</p>
              {kiroku.memories.map((memory) => {
                return (
                  <div key={memory.id} className="kiroku-list-item">
                    <div className="kiroku-left">
                      <p className="category">{memory.category}</p>
                      <p className="contents">{memory.contents}</p>
                    </div>
                    <p className="time">{memory.time}</p>  
                  </div>
                )
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
  )
}

export default App
