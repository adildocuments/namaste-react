import {useState} from 'react';
const useStatusOnline = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);

    window.addEventListener('offline', function(){
        setOnlineStatus(false)
    })

    window.addEventListener('online', function(){
        setOnlineStatus(true)
    })

    return onlineStatus;
}
export default useStatusOnline;