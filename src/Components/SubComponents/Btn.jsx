import { Button } from '@chakra-ui/button';
import React from 'react';

function Btn({text}) {
    return (
        <Button bg={"#3C486B"} color={"white"}>{text}</Button>
    );
}

export default Btn;