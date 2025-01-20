import './App.css';
import { useAppDispatch, useAppSelector } from './store/store';
import { selectField } from './store/fieldSlice';
import { checkWinner, selectSign } from './store/gameSlice';
import Field from './features/Field/Field';
import { Signs } from './features/Game/Signs';
import Cross from './features/Signs/Cross';
import Circle from './features/Signs/Circle';
import { useEffect } from 'react';


function App() {
  const dispatch = useAppDispatch();
  const field = useAppSelector(selectField);
  const sign = useAppSelector(selectSign);

  useEffect(() => {
    console.log("wha")
    dispatch(checkWinner({field}))
  }, [field])

  return (
    <>
      <div className='grid justify-items-center'>
        {sign === Signs.CROSS && <Cross size="small" />}
        {sign === Signs.CIRCLE && <Circle size="small"/>}
      </div>
      <Field field={field} />
    </>

  )
}

export default App
