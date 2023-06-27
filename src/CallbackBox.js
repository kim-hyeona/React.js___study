import React, { useEffect, useState } from 'react';

function CallbackBox({createBoxStyle}) {
    const [ style , setStyle ] = useState({});

    useEffect(() => {
        console.log('박스사이즈');
        setStyle(createBoxStyle());
    },[createBoxStyle]);

    return <div style={style} ></div>
    
}

export default CallbackBox;