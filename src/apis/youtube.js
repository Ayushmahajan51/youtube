import axios from 'axios'

const KEY = "AIzaSyB55XCC0dyQzl2VZRmLmcHD58kUiRZI_WM";

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:
    {
        part:'snippet',
        maxResults:5,
        key:KEY
    }
})