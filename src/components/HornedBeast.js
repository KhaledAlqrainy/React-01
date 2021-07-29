import React from 'react';

class HornedBeast extends React.Component {
    render(){
        return(
            <>
            <h2>{this.props.maintitle}</h2>
            <img src={this.props.imgsrc} alt={this.props.alt} title={this.props.imgtitle}></img>
            <p>{this.props.Descrpt}</p>
            </>
        )
    }
}

export default HornedBeast;