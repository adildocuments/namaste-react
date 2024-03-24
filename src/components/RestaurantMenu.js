import {useParams} from 'react-router-dom';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {SWIGGY_MENU_URL} from '../utils/constants.js';
import Shimmer from './Shimmer.js';


// import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import StarBorderIcon from '@mui/icons-material/StarBorder';




// const RestaurantMenu = () => {
//     const {restId} = useParams();
//     const [menu, setMenu] = useState([]);

//     useEffect(()=>{
//         fetchMenu();
//     }, []);
    
//     const fetchMenu = async () => {
//         try {
//             const menuData = await axios.get(SWIGGY_MENU_URL+restId);
//             console.log(menuData);

//             setMenu(menuData)
//         } catch(error){
//             console.log('Error:- ', error);
//         }
//     }
//     if (menu?.length === 0) {
//         return (
//             <Shimmer/>
//         )
//     }
//     const {name, costForTwo, cuisines} = menu?.data?.data?.cards[0]?.card?.card?.info;
//     const {itemCards} = menu?.data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

//     console.log(itemCards);
//     return (
//         <>
//             <h2>{name}</h2>
//             <h2>{cuisines.join(", ")+' '+'₹'+costForTwo/100}</h2>
//             {/* <ul> */}
//             {
//                 itemCards?.map((card)=>{
//                    return <li key={card?.card?.info?.id}>{card?.card?.info?.name}-₹{card?.card?.info?.price/100 || card?.card?.info?.defaultPrice/100}</li>
//                 })
//             }
//             {/* </ul> */}
            
//         </>
//     )
// }


const RestaurantMenu = () =>{
    const {restId} = useParams();
    const [menu, setMenu] = useState([]);

    useEffect(()=>{
        fetchMenu();
    }, []);

        const fetchMenu = async () => {
        try {
            const menuData = await axios.get(SWIGGY_MENU_URL+restId);
            console.log(menuData);

            setMenu(menuData)
        } catch(error){
            console.log('Error:- ', error);
        }
    }
    if (menu?.length === 0) {
        return (
            <Shimmer/>
        )
    }
    const {name, costForTwo, cuisines} = menu?.data?.data?.cards[0]?.card?.card?.info;
    const {itemCards} = menu?.data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    const {cards} = menu?.data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
    
    return (
        <Container sx={{margin:'20px auto', width:'90%'}}>
                <Box sx={{ bgcolor: '#f0f0f0', height: '100vh'}}> 
                {
                   cards?.filter((curEle)=>{
                        return curEle != 0
                   }).map((obj)=>{
                    return <Accordion defaultExpanded>
                        <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel1-content"
                                id="panel1-header">
                                    <Typography variant='h6' sx={{fontWeight:'bold'}}>{obj?.card?.card?.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {
                                itemCards?.map((obj)=>{
                                    return <Card sx={{display:'flex', justifyContent:'space-between'}}>
                                        <CardContent sx={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                                            <Typography sx={{fontSize:'10px'}}> 
                                                {obj?.card?.info?.name}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                            })
                    }
                        </AccordionDetails>
                    </Accordion>
                   }) 
                }
                </Box>
        </Container>
    )
}

export default RestaurantMenu;