import React from 'react';

export default ({ hasError, data}) => (
    <div>
        {hasError
            ? <p>Something went wrong</p>
            : data && <a rel="noopener noreferrer" target="_blank" href={`/s/${data.short}`}>Go to {`/s/${data.short}`}</a>}
    </div>

)