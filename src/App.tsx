import './App.css';
import { useAppDispatch, useAppSelector } from './store/store';
import { selectField } from './store/fieldSlice';
import { checkWinner, selectSign, selectWinDirection } from './store/gameSlice';
import Field from './features/Field/Field';
import { Signs } from './features/Game/Signs';
import Cross from './features/Signs/Cross';
import Circle from './features/Signs/Circle';
import { useEffect, useState } from 'react';
import Modal from './features/Modal/Modal';


function App() {
  const dispatch = useAppDispatch();
  const field = useAppSelector(selectField);
  const sign = useAppSelector(selectSign);
  const winDirection = useAppSelector(selectWinDirection)
  const [modalActive, setModalActive] = useState(false)

  const [prevWinDirection, setPrevWinDirection] = useState(winDirection);

  if (prevWinDirection != winDirection) {
    setModalActive(true);
    setPrevWinDirection(winDirection);
  }

  useEffect(() => {
    dispatch(checkWinner({ field }))
  })

  return (
    <>
      <Modal isActive={modalActive} onClick={() => setModalActive(false)}>
        {sign === Signs.CROSS && <Cross size="large" />}
        {sign === Signs.CIRCLE && <Circle size="large" />}
        <h1 className="text-4xl">Winner</h1>
      </Modal>
      <div className='grid justify-items-center'>
        {sign === Signs.CROSS && <Cross size="small" />}
        {sign === Signs.CIRCLE && <Circle size="small" />}
      </div>
      <Field field={field} />
    </>

  )
}

export default App
