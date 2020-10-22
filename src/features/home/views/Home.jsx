import React from 'react';
import { useHistory } from 'react-router-dom';

import { infoButtons } from '../../../shared/functions/constants';
import { getInfoStorage } from '../../../shared/functions/infoStorage';
import ButtonHome from '../../../shared/components/buttons/buttonHome/ButtonHome';
import {
  Container,
  BoxButtons,
  H1,
} from './styles';

const Home = () => {
  const history = useHistory();
  const infoStorage = getInfoStorage();
  console.log(getInfoStorage());

  const renderButtons = (infoButton) => {
    const infoStorageFiltered = infoStorage.find((info) => infoButton.id === info.id);

    return (
      <ButtonHome
        text={infoButton.title}
        icon={infoButton.icon}
        onClick={() => history.push(`/buy/${infoButton.id}`)}
        infoLocalStorage={infoStorageFiltered}
      />
    );
  };

  return (
    <Container>
      <H1>
        Here's your saving goals!
      </H1>
      <BoxButtons>
        {infoButtons.map(renderButtons)}
      </BoxButtons>
    </Container>
  );
};

export default Home;
