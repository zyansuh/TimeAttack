import React from "react";
import MedalItem from "MedalItem";

function MedalList({ medals }) {
    const sortedMedals = [...medals].sort((a,b) => b.gold - a.gold);

    return(
        <div style={Styles.list}>
            {sortedMedals.map((medals, index) => (
                <MedalItem key={index} medal ={medal}></MedalItem>
            ))}
        </div>
    );
}

const styles ={
    list : {
        display : 'flex',
        flexDirection : 'coulmn',
        gap : '10px',
        width : '300px'
    }
};

export default MedalList;