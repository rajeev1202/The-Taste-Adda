export const filterItems = (searchTxt, itemsList) => {
    if(!searchTxt.length)
      return itemsList

    let filteredList = itemsList.filter((item) => {
     return  item.data.name.toLowerCase().includes( searchTxt.toLowerCase())
    })
    return filteredList;
  }