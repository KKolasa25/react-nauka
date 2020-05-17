// selectors

export const getSearchString = ({searchString}) => searchString; // zwraca wartość właściwosci searchString zapisanej w stanie aplikacji 
// (aktualna fraza wyszukiwania, pobraną ze stanu aplikacji).

export const countAllCards = ({cards}) => cards.length; // wyszukuje wszystkie karty i zwraca ich liczbę (pobieramy ze stanu aplikacji).

export const countVisibleCards  = ({cards, searchString}) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length; 
// wyszukuje karty pasujące do wpisanej frazy w inpucie (seatchString) i liczy ich ilość występowania.

// action name creator

const reducerName = 'searchString';
const createActionName = name => `app/${reducerName}/${name}`;

// actions types

export const CHANGE = createActionName('CHANGE'); // 

// action creators

export const createAction_changeSearchString = payload => ({payload, type: CHANGE }); // przekazujemy ładnunek z propsem (changeSearchString) 
// typu CHANGE, który bierze on wartość wpisanej frazy, który zostanie zatwierdzony "OK" (handleOK()).

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) { 
    case CHANGE:
      return action.payload; // przy wykryciu akcji zmiany, zwracamy ładunek tej akcji (czyli zwracamy jej nową wartość). 
    default:
      return statePart;
  }
}

