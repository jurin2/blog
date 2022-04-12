function Header(props){
    return (
      <header className="black-header">
        <h1>React 블로그</h1>
        <button onClick={props.onWriteOpen}>글작성</button>
      </header>
    );
  }

  function Section(props){
  
    let listItem = [];
    for(let idx=0;idx<props.listContent.length;idx++){
      listItem.push(
        <div className="list-item" key={idx}>
          <h2>
            <span id={idx} onClick={(event)=>{props.onModalOpen();props.onSetID(event.target.id);}}>{props.listTit[idx]}</span> 
            <span onClick={ ()=>{props.onMouseClick(idx,1)} } style={ {cursor:'pointer'} }>👍</span>
            <span onClick={ ()=>{props.onMouseClick(idx,2)} } style={ {cursor:'pointer'} }>👎</span>
            <span>{props.best[idx]}</span>
          </h2>
          <p>2022-03-29</p>
          <p>{props.listContent[idx]}</p>
        </div>
      );
    }
  
  
    return (
      <section className="list">
        {listItem}      
      </section>
    );
  }

  export {Header,Section};