import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          このサイトはAlice_in_AqAによる自己紹介サイトである。
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="名前">
          <h1>浅井　響太</h1>
          <h3>自称まつリス</h3>
      </div>
        </a>
      </header>
      <div class="About-me">
        <h2>私について</h2>
        <h4 class="年齢">年齢</h4>
        <p>20</p>
        <h4 class="職業">職業</h4>
         <p>ポケモントレーナー（嫁ポケ　パチリス）</p> 
        <h4 class="大学名">大学名</h4>
        <p>桃山学院大学</p>
        <h4>所属</h4>
        <p>社会学部　社会学科</p>
        <h4 class="趣味">趣味</h4>
        <p>ゲーム、読書、睡眠</p>
    
    </div>

    </div>
  );
}

export default App;
