import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

function Modal({
  modalText,
  buttonLeft,
  buttonRight,
  leftButtonFunc,
  rightButtonFunc,
  onClose,
}) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === 'Escape' ? onClose() : null);
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [onClose]);

  const handleLeftButton = (e) => {
    e.preventDefault();
    leftButtonFunc();
  };

  const handleRightButton = (e) => {
    e.preventDefault();
    rightButtonFunc();
  };

  if (isBrowser) {
    return ReactDOM.createPortal(
      <div className="fixed bg-slate-700 bg-opacity-60 flex justify-center items-center inset-0 z-50">
        <div className="bg-white px-16 py-8 rounded-md text-center shadow-lg shadow-slate-800 drop-shadow-xl">
          <p className="text-xl mb-4 font-bold text-slate-500 whitespace-pre-wrap">
            {modalText ?? 'No event description'}
          </p>
          {buttonLeft && (
            <button
              onClick={handleLeftButton}
              className="bg-primary px-7 py-2 rounded-md text-md text-white font-semibold"
            >
              {buttonLeft}
            </button>
          )}
          {buttonRight && (
            <button
              onClick={handleRightButton}
              className="bg-indigo-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold"
            >
              {buttonRight}
            </button>
          )}
        </div>
      </div>,
      document.getElementById('modal-root')
    );
  } else {
    return null;
  }
}

export default Modal;
