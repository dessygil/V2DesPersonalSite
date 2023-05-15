import React from "react";

export default function Intro() {
  const one = <h3 className="mt-20">Hi, my name is</h3>;
  const two = <h1 className="text-5xl">Desmond Gilmour.</h1>;
  const three = (
    <p className="max-w-sm">
      I'm a research software engineer interested in combining my computer 
      science and chemistry background to help bring drugs to market faster 
      using AI/ML for drug discovery and lab automation. 
    </p>
  );

  const four = (
    <button className="inline-block mt-10" role="button">
      <a className="text-base font-light text-black no-underline hover:bg-blue-400 hover:text-black" href="mailto: desmondgilmour@gmail.com">
        Contact me!
      </a>
    </button>
  );

  const items = [one, two, three, four];

  return (
      <div className="flex flex-col items-start font-roboto space-y-2">
        {items.map((item, i) => (
          <div key={i}>{item}</div>
        ))}
      </div>
  );
}
