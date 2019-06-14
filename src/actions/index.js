//Action Creator
 const selectSong = song => {
    //
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};

const increment = () =>({type:'increment'});
const decrement = () =>({type:'decrement'});

export default selectSong;
