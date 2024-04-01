import { Fragment } from "react";

function Home (props,b){
    console.log('@',b);
    return (
        <Fragment>
            <h2> 这里是home组件</h2>
            <p>my name is {props.name}</p>
        </Fragment>
    )
}

export default Home