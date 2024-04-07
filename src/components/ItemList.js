import {ITEM_IMAGE_URL} from '../utils/constants.js';
import noImage from '../assets/images/noImage.png'

const ItemList = ({items}) => {
    return (
        <div className="bg-white">
            {
                items.map((item)=>(
                    <div key={item.card.info.id} className=" border-gray-400 border-b-2 p-4" > 
                        <div className='flex justify-between text-left'>
                            <div className='w-9/12'>
                                <span>{item.card.info.name}</span>
                                <br/>
                                <span>₹{item.card.info.price/100 ||  item.card.info.defaultPrice/100}</span>
                                <div>
                                    <p className="text-sm text-gray-400">{item.card.info.description}</p>
                                </div>
                            </div>
                            <div className='3/12 relative'>
                                <button className='absolute bottom-0 left-10 bg-white px-6 py-2 rounded-xl border border-green-300 text-green-600'>Add</button>

                                {item?.card?.info?.imageId ?<img className="w-36 aspect-square object-cover rounded-lg" src={`${ITEM_IMAGE_URL}/${item.card.info.imageId}`} />:<img className="w-36 aspect-square object-cover rounded-lg" src={noImage} />}
                                
                            </div>
                        </div>
                        
                    </div>
                    // 
                ))
            }
        </div>
    )
}

export default ItemList;