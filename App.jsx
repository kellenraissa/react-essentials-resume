import TabButton from "./TabButton";
import { useState } from "react";
import { CORE_CONCEPTS } from './data.js';
import { Header } from "./Header";
import { EXAMPLES } from "./data-with-examples.js";
import CoreConcept from "./CoreConcepts.jsx";

function App() {

  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please, select a topic.</p>;

  if(selectedTopic){
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
          {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
    )
  }

  return (
    <div>
      <Header/>
      <main>
        <h2>Time to get started!</h2>
      </main>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptItem) => (
            <CoreConcept key={conceptItem.title} {...conceptItem}/>
          ))} 
        </ul>
      </section>
      <section id="examples">
        <h2>EXAMPLES</h2>
      <menu>
        {/* Passando valor booleano para o isSelected */}
        <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect("components")}>Components</TabButton>
        <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
        <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect("props")}>Props</TabButton>
        <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect("state")}>State</TabButton>
      </menu>
      </section>
      {tabContent}
    </div>
  );
}

export default App;

{/* Se não tiver dado no selectedTopic fica !selectedTopic, vira uma condição para aparecer. Casocontrário, mostra o conteudo */}
{/* {!selectedTopic ? (<p>Please, select a topic.</p>) : (
<div id="tab-content">
<h3>{EXAMPLES[selectedTopic].title}</h3>
<p>{EXAMPLES[selectedTopic].description}</p>
<pre>
  <code>
  {EXAMPLES[selectedTopic].code}
  </code>
</pre>
</div>)} */}
{/* {!selectedTopic && <p>Please, select a topic.</p>} */}
{/* {selectedTopic && (
<div id="tab-content">
<h3>{EXAMPLES[selectedTopic].title}</h3>
<p>{EXAMPLES[selectedTopic].description}</p>
<pre>
  <code>
  {EXAMPLES[selectedTopic].code}
  </code>
</pre>
</div>
)} */}