import { GlobalStyles } from './styles/global';
import TypingBox from './components/typingBox';
import Sample from './components/pages/sample';
var randomWords = require('random-words');

function App() {

  const words = randomWords(50);

  return (
    <>
      <div className='w-100 canvas'>
        <GlobalStyles />
        <h1 className='d-flex flex-column' style={{ textAlign: 'center' }}>Typing website</h1>
        <TypingBox words={words} />
        <h1 style={{ textAlign: 'center' }}>Footer</h1>
      </div>
      <>
        <Sample />
      </>
    </>
  );
}

export default App;
