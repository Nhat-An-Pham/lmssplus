import Navbar from "../components/Navbar";

//sections
import ContentBox from "../components/ContentBox";
import ChatBox from "../components/ChatBox";
import PlayerBox from "../components/PlayerBox";

function App() {
  return (
    <div className="layout">
      <div className="layout__header">
        <Navbar />
      </div>
      <div className="layout__body">
        <div className="layout__body__section layout__body__section--contentBox">
          <ContentBox />
        </div>
        <div className="layout__body__section layout__body__section--chatBox">
          <ChatBox/>
        </div>
        <div className="layout__body__section layout__body__section--playerBox">
          <PlayerBox/>
        </div>
      </div>
    </div>
  );
}

export default App;
