import React from 'react';
import { connect } from 'react-redux';


const SongDetail= ({mySelectedSong}) => {
   
    if(!mySelectedSong){
        return <div>Select a song </div>;
         
    }
    return (
    <div>
        Song Details:
      <p> Song title : {mySelectedSong.title} </p>
        <p>Song Duration : {mySelectedSong.duration}</p>
      
    </div>
        );
}

const mapStateToProps = (state) => {
    return { mySelectedSong: state.selectedSong }
};

export default connect(mapStateToProps) (SongDetail);