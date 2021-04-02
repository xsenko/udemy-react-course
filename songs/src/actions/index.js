

// action creater
export const selectSong = (song) => {

    // action creater should return object with type and payload.
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
}