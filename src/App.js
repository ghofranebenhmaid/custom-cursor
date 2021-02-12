import './App.scss';
import Cursor from './Cursor';

function App() {
   return (
      <div className='inner'>
         <div className='text' >
            <h1 className='text__title'>
               Show name of shapes  on hover over.
            </h1>
         </div>
         <div className='container'>
            <Cursor />
            <div className='square mr'></div>
            <div className='cercle mr'></div>
            <div className='triangle mr'></div>
            <div className='star mr'></div>
            <div className='heart mr'></div>
            <div className='rectangle mr'></div>
         </div>
      </div>
   );
}

export default App;
