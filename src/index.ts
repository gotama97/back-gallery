import app from "./app";
import { isMainThread } from "worker_threads";
import { startConnection } from "./database";

async function main(){
    startConnection();
    await app.listen(app.get('port'));
    console.log('server listening on port ',app.get('port'));
}

main();