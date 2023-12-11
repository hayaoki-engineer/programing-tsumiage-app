import { useState } from 'react'
import './App.css'

function App() {

  // useStateで記録を管理
  const [kirokus, setKiroku] = useState([
    {
      id: "1",
      category: "TypeScript",
      contents: "Udemy「TyepeScript入門」",
      time: "3時間"
    },
    {
      id: "2",
      category: "React",
      contents: "Udemy「React入門」",
      time: "3時間"
    },
    {
      id: "3",
      category: "Go",
      contents: "Udemy「Go入門」",
      time: "3時間"
    }
  ])

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
