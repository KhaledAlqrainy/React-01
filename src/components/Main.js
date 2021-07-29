
import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component{
    render(){
        return(
            <div>
            <HornedBeast
            maintitle="Mouflon"
            imgsrc="https://modernfarmer.com/wp-content/uploads/2014/08/28476658_9c97f35096_o.jpg"
            Descrpt="very familiar domestic sheep." />

            <HornedBeast
            maintitle="Giant Eland"
            imgsrc="https://modernfarmer.com/wp-content/uploads/2014/08/eland.jpg"
            Descrpt="the giant eland is the biggest antelope in the world." />
            </div>

        )
    }
}

export default Main;