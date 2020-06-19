import { ZoomMtg } from '@zoomus/websdk';
import { Zoom } from '@material-ui/core';

ZoomMtg.preLoadWasm();
ZoomMtg.prepareJssdk();

export default Zoom;