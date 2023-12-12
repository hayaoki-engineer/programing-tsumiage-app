import { useState } from 'react'
import './App.css'
import { Kirokus } from './Kirokus'

function App() {

  const kiroku1 = new Kirokus("1", "React", "Udemy入門", "3時間")
  const kiroku2 = new Kirokus("1", "React", "Udemy入門", "3時間")
  const kiroku3 = new Kirokus("1", "React", "Udemy入門", "3時間")
  
  // useStateで記録を管理
  const [kirokus, setKiroku] = useState([kiroku1, kiroku2])

  return (
    <>
      <ul className='kiroku-list'>
        {kirokus.map((kiroku) => {
          return (
            <li key={kiroku.id} className='kiroku-list-item'>
              <div className='kiroku-left'>
                <p className='category'>{kiroku.category}</p>
                <p className='contents'>{kiroku.contents}</p>
              </div>
              <p className='time'>{kiroku.time}</p>
            </li>
          )
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
