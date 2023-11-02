import './App.css';
import Card from './ui-elements/card/card';

function App() {
  return (
    <div className="App">
      <Card task={{ id:"CAM-1", title: "Update User Profile Page UI", tag: ["Feature request"], userId :"usr-1", status:"Todo", priority: 4 }}/>
    </div>
  );
}

export default App;
