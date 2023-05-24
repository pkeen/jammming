import React, {useState} from 'react';


const Track = () => {

    const [isRemoval, setIsRemoval] = useState(true);

    const renderAction = () {
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
                <h3>track name will go here</h3>
                <p>track artist will go here | track album will go here</p>
            </div>
            <button className="Track-action">+ or - will go here</button>
        </div>
    );  
}

export default Track;
