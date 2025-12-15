import React from 'react';
import CounterWithoutHook from './hooks/CounterWithoutHook.jsx'
import CounterWithUseState from './hooks/CounterWithUseState.jsx'
import CounterWithUseEffect from './hooks/CounterWithUseEffect.jsx'
import CounterWithUseRef from './hooks/CounterWithUseRef.jsx'

function HooksContainer() {
    return (
        <div>
            <CounterWithoutHook />
            <CounterWithUseState />
            <CounterWithUseEffect />
            <CounterWithUseRef />
        </div>
    );
}
export default HooksContainer;