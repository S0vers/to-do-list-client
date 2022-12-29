import { Spinner } from 'flowbite-react';
import React from 'react';

const Loding = () => {
    return (
        <div className="text-center">
            <Spinner aria-label="Center-aligned spinner example" size='xl' />
        </div>
    );
};

export default Loding;