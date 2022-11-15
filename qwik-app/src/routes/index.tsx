import { component$, setPlatform, useStore } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export const Counter = component$((props: {step?:number, initial?: number}) => {
  const state = useStore({
    count: props.initial
  });
  
  return (
    <>
      <span>
        Hello, Fuad! Here's your counter: {state.count}
      </span>
      <div>Times: {state.count}</div>
      <button
        className='standard btn'
        onClick$={ () => {
          if(state.count){
            if(props.step){
              state.count += props.step;
            } else {
              state.count++;
            }
          } else {
            state.count = 1;
          }
        }}>
        Increment
      </button>
    </>
  )
});

export default component$(() => {
  const state = useStore({
    count: 0,
    numbers: [
      'One', 'Two', 'Three'
    ] as string[] | null,
  });

  return (
    <>
      <h1>Qwik Practise Application</h1>

      <ul>
        <li>This homepage uses a layout without a menu.</li>
        <li>
          <span>The </span>
          <a href="/docs">Documentation</a>
          <span> pages use multiple nested layouts, one of them providing a left menu.</span>
        </li>
        <li>
          Check out the <code>src/routes</code> directory to get started.
        </li>
        <li>
          Add integrations with <code>npm run qwik add</code>.
        </li>
        <li>
          More info about development in <code>README.md</code>
        </li>
        <li>
          <a href="/docs">Qwik City</a>
          <span> is the meta-framework for Qwik</span>
        </li>
      </ul>

      <div>
        {
          state.numbers ? (
            <ul>
              {state.numbers.map((number) => (
                  <li>
                    {number}
                  </li>
                ))
              }
            </ul>
          ) : (
            <p>
              ...Loading
            </p>
          )
        }
      </div>

      <Counter step={2} initial={10} />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Qwik Practise App',
};
