import React from 'react';
import { useDocumentTitle } from 'utils/hooks'

function PageNotFound(){
    useDocumentTitle('Playtube | 404')
    return(
        <div>
            404 page not found :(
        </div>
    );
}

export { PageNotFound }