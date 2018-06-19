import * as actionTypes from '../constant/musicConstant';

//添加音乐
export function addMusic(data){
    return{
        type: actionTypes.ADD_MUSIC,
        data
    }
}

//播放和暂停音乐
export function changePlayStatus(data){
    return{
        type: actionTypes.CHANGE_MUSIC_STATUS,
        data
    }
}

//更改音乐
export function changeMusic(data){
    return{
        type: actionTypes.CHAGE_CURRENT_MUSIC,
        data
    }
}

//添加并更改音乐
export function addAndChangeMusic(data){
    return{
        type: actionTypes.ADD_AND_CHANGE_MUSIC,
        data
    }
}

//根据下标播放指定歌曲
export function playMusicByIndex(data){
    return{
        type: actionTypes.PLAY_MUSIC_BY_INDEX,
        data
    }
}

//清空播放列表
export function clearMusicList(){
    return{
        type: actionTypes.CLEAR_MUSIC_LIST,
    }
}

//从列表中移除音乐
export function removeMusicFromList(data){
    return{
        type: actionTypes.REMOVE_MUSIC_FROM_LIST,
        data
    }
}

//添加歌曲列表
export function addSongList(data){
    return{
        type: actionTypes.ADD_SONG_LIST,
        data
    }
}

//移除歌曲列表
export function removeSongList(data){
    return{
        type: actionTypes.REMOVE_SONG_LIST,
        data
    }
}
