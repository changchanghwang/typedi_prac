import 'reflect-metadata';
import * as Koa from 'koa';
import * as koaBody from 'koa-body';
import {globalRouter} from './routes'
import 'dotenv/config'

(async () => {
    const app = new Koa();
    app.use(koaBody());
    app.use(globalRouter.middleware());
    app.listen(Number(process.env.PORT), () => console.log('hello'));
})();