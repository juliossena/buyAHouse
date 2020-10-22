import React from 'react';
import { useHistory } from 'react-router-dom';

import { infoButtons } from '../../../shared/functions/constants';
import ButtonHome from '../../../shared/components/buttons/buttonHome/ButtonHome';
import {
  Container,
  BoxButtons,
  H1,
} from './styles';

const Home = () => {
  const history = useHistory();

  return (
    <Container>
      <H1>
        Here's your saving goals!
      </H1>
      <BoxButtons>
        {infoButtons.map((infoButton) => (
          <ButtonHome
            text={infoButton.title}
            icon={infoButton.icon}
            onClick={() => history.push(`/buy?id=${infoButton.id}`)}
          />
        ))}

      </BoxButtons>
    </Container>
  );
};

export default Home;
