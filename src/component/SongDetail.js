import React from 'react';
import { connect } from 'react-redux';


const SongDetail= ({ songs }) => {
    if(!songs){
        return <div>Select a song </div>;
    }
    return (
    <div>
       <p> {songs.title} </p>
        <p>{songs.duration}</p>
    </div>
        );
}

const mapStateToProps = (state) => {
    return { mySelectedSong: state.selectedSong }
};

export default connect(mapStateToProps) (SongDetail);