function load(localStorageKey) {
  const stringData = window.localStorage.getItem(localStorageKey);
  let data = null;

  try {
    data = JSON.parse(stringData);
  } catch (e) {}

  
  return data;
}

function save(localStorageKey, data) {
  let loaded=load(localStorageKey);

  if(!loaded){
    loaded=[];
  }

  loaded.push(data);
  window.localStorage.setItem(localStorageKey, JSON.stringify(loaded));
}

function update(localStorageKey, id){
  let loaded=load(localStorageKey);

  if(loaded.length){
    loaded.forEach(el => {
      if(el.id === id*1){
        el.isCompleted=!el.isCompleted;
      }
    });
    window.localStorage.setItem(localStorageKey, JSON.stringify(loaded));    
  }
}

export { load, save, update };
