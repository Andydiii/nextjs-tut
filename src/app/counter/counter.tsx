"use client";

import React, { useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <>
        <div>counter: {counter}</div>
        <button onClick={() => setCounter(counter + 1)}> + 1</button>
    </>
  )
}
