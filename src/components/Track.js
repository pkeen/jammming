import React, {useState} from 'react';


const Track = ({name, artist, album}) => {

    const [isRemoval, setIsRemoval] = useState(true);

    const RenderAction = () => {
        if (isRemoval) {
            return (        
                <button className="Track-action">-</button>
            )
        } else {    
            return <button className="Track-action">+</button>
        }

        return;
    }

    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{name}</h3>
                <p>{artist} | {album}</p>
            </div>
            <RenderAction />
        </div>
    );  
}

export default Track;
