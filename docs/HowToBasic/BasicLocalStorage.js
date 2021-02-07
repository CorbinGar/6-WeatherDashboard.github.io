
function SaveItem(ItemName,Item){
    localStorage.setItem(ItemName, JSON.stringify(Item));
}

function LoadItem(ItemName){
    var loadItem = JSON.parse(localStorage.getItem(ItemName));
return loadItem
}


function InitItem(ItemName,Item){
    var loadItem = LoadItem(ItemName);
    if(loadItem === null){
    SaveItem(ItemName,Item)
    return Item
    }else{
    return loadItem
    }
}
