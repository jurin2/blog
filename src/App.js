import './App.css';
import {useState} from 'react';

function Header(){
  return(
    <header className='black-header'>
      <h1>React 블로그</h1>
    </header>
  );
}
function Section(props){
  let listItem = [];
  for(let idx=0;idx<props.listContent.length;idx++){
    listItem.push(
      <div className="list-item" key={idx}>
        <h2>
          <span id={idx} onClick={()=>{props.onModalOpen(); props.onSetID();}}>{props.listTit[idx]} </span>
          <span onClick={()=>{props.onMsClick(idx,1)}} style={{cursor:'pointer'}}>👍</span> 
          <span onClick={()=>{props.onMsClick(idx,2)}} style={{cursor:'pointer'}}>👎</span> 
          <span>{props.best[idx]}</span>
        </h2>
        <p>2022-03-02</p>
        <p>{props.listContent[idx]}</p>
      </div> 
    );
  }      

  return(
    <section className='list'>
      {listItem}
    </section>
  );
}
function Modal(props){
  return(
    <section id='modal' className='modal'>
      <div className="modal-container">
        <div className="modal-header">
          <button onClick={props.onModalClose}>닫기</button>
        </div>
        <div className="modal-body">
          <div>{props.listTit}</div>
          <div>날짜</div>
          <div>{props.listContent}</div>
        </div>
      </div>
    </section>
  )
}


function App() {
  let [viewIdx,setViewIdx] = useState(0);
  let [listTit,setListTit] = useState(['서구청역 숨은 맛집','연희동 추천 카페','석남역 7호선 탑승기']);
  let [listContent,setListContent] = useState([
    '국민경제의 발전을 위한 중요정책의 수립에 관하여 대통령의 자문에 응하기 위하여 국민경제자문회의를 둘 수 있다. 국가는 농·어민과 중소기업의 자조조직을 육성하여야 하며, 그 자율적 활동과 발전을 보장한다. 대법원은 법률에 저촉되지 아니하는 범위안에서 소송에 관한 절차, 법원의 내부규율과 사무처리에 관한 규칙을 제정할 수 있다. 모든 국민은 종교의 자유를 가진다.',
    '대한민국의 국민이 되는 요건은 법률로 정한다. 국가는 대외무역을 육성하며, 이를 규제·조정할 수 있다. 피고인의 자백이 고문·폭행·협박·구속의 부당한 장기화 또는 기망 기타의 방법에 의하여 자의로 진술된 것이 아니라고 인정될 때 또는 정식재판에 있어서 피고인의 자백이 그에게 불리한 유일한 증거일 때에는 이를 유죄의 증거로 삼거나 이를 이유로 처벌할 수 없다.',
    '국회가 재적의원 과반수의 찬성으로 계엄의 해제를 요구한 때에는 대통령은 이를 해제하여야 한다. 국방상 또는 국민경제상 긴절한 필요로 인하여 법률이 정하는 경우를 제외하고는, 사영기업을 국유 또는 공유로 이전하거나 그 경영을 통제 또는 관리할 수 없다.'
  ]);
  let [best,setBest] = useState([0,0,0]);
  let newBest = [...best];
  function bestValue(idx,para){
    if(para == 1){
      ++newBest[idx];
      setBest(newBest);
    }else if(para == 2 && newBest[idx] > 0){
      --newBest[idx];
      setBest(newBest);
    }
  }

  let [modal,setModal] = useState(false);

  return (
    <div className="App">
      <Header/>
      <Section listTit={listTit} listContent={listContent} best={best} onMsClick={(value1,value2)=>{bestValue(value1,value2)}} onModalOpen={()=>{setModal(true)}} onSetID={(e)=>{setViewIdx(e.target.id)}}/>
      {
        modal == true ? <Modal listTit={listTit[viewIdx]} listContent={listContent[viewIdx]} onModalClose={()=>{setModal(false)}}/> : null
      }

    </div>
  );
}

export default App;
