import React, { useCallback, useEffect, useState } from 'react'
import './modal.css'

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // モーダルを閉じる関数
  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, [])
  
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isModalOpen]);
  
  return (
    <>
      <button className="create-button" onClick={() => setIsModalOpen(true)}>
        積み上げを記録する
      </button>
      {isModalOpen && (
        <>
          <div className="modal-bg"></div>
          <div className="modal-box">
            <p className="modal-form-title">積み上げを記録する</p>
            <button className="close-button" onClick={closeModal}>
              Close Modal
            </button>
            <div className='modal-form'>
              <div className='modal-label'>
                <label>カテゴリ</label>
                <label>内容</label>
                <label>時間</label>
              </div>
              <div className='modal-input-field'>
                <input type="text" />
                <input className="input-detail" type="text" />
                <input type="text" />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );

}

export default Modal