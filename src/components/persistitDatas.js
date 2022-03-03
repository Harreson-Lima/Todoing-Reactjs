const SAVED_ITEMS = "savedItems";

export function persistitState(state) {
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(state));
}

export function loadState(){
    const actualState = localStorage.getItem(SAVED_ITEMS)
    if(actualState)
    return JSON.parse(actualState)
    else
    return [];
}