import React from "react";
import Components from "./components";
import Card from "./card";

function createComponent(prop){
    return(<span>
    <Card
    key={prop.id}
    emoji={prop.emoji}
    title={prop.title}
    bio={prop.bio} 

    />
    </span>
    );
}

function app(){
    return (<div>
        {Components.map(createComponent)}
        </div>
    )
}

export default app;