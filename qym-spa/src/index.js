import {sync} from './components/sync'
import(/*webpackChunkName: "async-banner"*/'./components/banner/index.js').then(_ => {
	_.default.init();
});
sync();
