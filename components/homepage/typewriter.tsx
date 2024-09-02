'use client';

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

function createTypedInstance(el: HTMLElement) {
  return new Typed(el, {
    stringsElement: '#bios',
    typeSpeed: 40,
    backSpeed: 10,
    loop: true,
    backDelay: 1000,
  });
}

export function Typewriter() {
  const el = useRef<HTMLElement | null>(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    if (!el.current) return;
    typed.current?.destroy();
    typed.current = createTypedInstance(el.current);
  }, []);

  return (
    <div>
      <ul id="bios" className="hidden">
        <li>I'm Oliver Patrick Holroyd</li>
        <li>Call me Oli</li>
        <li>I'm a Full Stack Software Developer!</li>
        <li>I've worked with React</li>
        <li>I've worked with Next</li>
        <li>I've worked with Node</li>
        <li>I've worked with Go</li>
        <li>I've worked with C#</li>
        <li>I've worked with AWS</li>
        <li>I've worked with Azure</li>
        <li>I've worked with MongoDB and CosmosDB</li>
        <li>I've worked with SQL Server</li>
        <li>I've worked with Unity and Godot</li>
        <li>I've worked with Python</li>
        <li>I've worked with Java and Kotlin</li>
      </ul>
      <span
        ref={el}
        className="text-2xl text-neutral-900 dark:text-neutral-100"
      />
    </div>
  );
}
