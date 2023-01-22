import React from "react";


function card(props){return (<span>
<span className='card'>
<div className='emoji'>{props.emoji}</div>
<h2>{props.title}</h2>
<p>{props.bio}</p>
</span>
</span>);
}

export default card;