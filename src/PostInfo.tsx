import * as React from 'react';
import {AppContextConsumer} from './Context';

// 今回はInterfaceを使いnullの可能性もあるため、&&の表記あり
export const PostInfo = () => (
    <AppContextConsumer>
        {appContext => appContext && (
            <div>
                Name: {appContext.name},

                Author: {appContext.author},
                
                Url: {appContext.url}
            </div>
        )}
    </AppContextConsumer>
)