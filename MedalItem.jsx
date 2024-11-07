import React from "react";

function MedalItem({ medal }) {
    return(
        <>
        <div style={styles.item}></div>
        <h3>{medal.country}</h3>
        <p>금메달 : {medal.gold}</p>
        <p>은메달 : {}</p>
        </>
    )
}