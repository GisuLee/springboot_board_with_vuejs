import axios from 'axios';

const instance = axios.create({
	baseURL : "http://ec2-13-125-170-210.ap-northeast-2.compute.amazonaws.com"
});

export default instance;