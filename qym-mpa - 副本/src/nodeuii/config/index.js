// import path from 'path'
import {extend} from "lodash-es"

let config = {
	env:process.env.NODE_ENV
}

if(process.env.NODE_ENV == 'development'){
	const localConfig = {
		port:8081
	}
	config = extend(config,localConfig);
}

if(process.env.NODE_ENV == 'production'){
	const proConfig = {
		port:80
	}
	config = extend(config,proConfig);
}


export default config;