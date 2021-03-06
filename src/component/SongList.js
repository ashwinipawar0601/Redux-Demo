import React, {Component } from 'react';
import {connect } from 'react-redux';
import  selectSong  from '../actions';

class SongList extends React.Component {
    renderList(){
        return this.props.songs.map((song) => {
            return (
              
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                         className="ui button primary"
                         onClick={() => this.props.selectSong(song)}
                         >
                            select
                        </button>
                    </div>
                    
                    <div className="content">{song.title}</div>
                    
               </div>
              
               
            )
        }) ;
    }
    
    render() {
       
        return (
            <div>
         <div className="ui divided list">
         {this.renderList()}
         </div> 
         
                <div className="ui form">
                    <button 
                    className="ui basic button"
                    onClick = {() =>this.props.increment}                    >increment</button>
                    <button className="ui basic button"
                    onClick = {() =>this.props.decrement}  
                    >decrement</button>
                   count : <span>{this.props.count}</span>
                </div>
                </div>
             );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return (
         {songs: state.songs } 
        
         );
}


export default connect(
    mapStateToProps, { selectSong }) 
    (SongList);