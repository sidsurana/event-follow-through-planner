import {createProxy} from './ai-proxy.mjs';
export function createHandler(options={}){return createProxy({...options,project:"sid-cos-usul-markets-20261021",task:"cos.usul.event-gtm.v1"});}
export default async function handler(req,res){return createHandler()(req,res);}
