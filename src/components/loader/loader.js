import React from 'react';

const Loader = () => {
    return (
        <div class="loading__screen">
            <div class="loading__animation">
                <img src="./favicon.png" alt="logo" class="loading__logo" />
                <div class="loading__bar"></div>
            </div>
        </div>
    );
}

export default Loader;
