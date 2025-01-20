import './App.css';
import { useAppSelector } from './store/store';
import { selectField, selectSign } from './store/fieldSlice';
import Field from './features/Field/Field';
import { Signs } from './features/Game/Signs';
import Cross from './features/Signs/Cross';
import Circle from './features/Signs/Circle';


function App() {
  const field = useAppSelector(selectField);
  const sign = useAppSelector(selectSign);

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
