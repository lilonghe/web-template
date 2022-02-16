import { init } from "@rematch/core";
import rematchLoadingPlugin from '@rematch/loading';
import * as models from "./models";

const store = init({ 
    models,
    plugins:[rematchLoadingPlugin()] 
});

export default store;