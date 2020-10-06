import React, { useState } from 'react';

import Button from './shared/components/button/Button';
import InputMonetario from './shared/components/input/InputMonetario';

function App() {
  const [value, setValue] = useState('');

  const handleValorInput = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="App">
      <InputMonetario
        value={value}
        onChange={handleValorInput}
        isError={false}
      />
    </div>
  );
}

export default App;
