import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItem, setShowIndexFn, setIsCollapseFn}) =>{
    console.log('show item', showItem)
    const handleClick = (showItem) => {
        console.log('before handle', showItem)
        setShowIndexFn();
        setIsCollapseFn(!showItem);
    }
    return (
        <>
            <div className="w-6/12 mx-auto  bg-gray-200 ">
                <div className="flex justify-between p-5 my-2 drop-shadow-2xl hover:cursor-pointer" onClick={()=>{handleClick(showItem)}}>
                    <span>{data.title} ({data.itemCards.length}) </span>
                    <span>⬇️</span>
                </div>
                {showItem && <ItemList items={data.itemCards}/>}                 
            </div>
        </>
    )
}
export default RestaurantCategory;