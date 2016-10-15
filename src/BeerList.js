import React from 'react';
import Ranker from './Ranker';
import BeerDescription from './BeerDescription';
import DeleteButton from './DeleteButton';

const BeerList = ({beers, changeBeerRanking, saveDescription, deleteHandler}) => {
  const rankingHandler = (e) => {
    changeBeerRanking(e.target.getAttribute('data-record-id'), e.target.value);
  }

  const beerListItems = beers.map((beer, i) => {
    const availableRanks = [5,4,3,2,1];
    return (
      <li key={i}>
        { beer.name }
        <Ranker id={beer.id} currentRanking={beer.ranking} ranks={availableRanks} rankingHandler={rankingHandler}/>
        <BeerDescription id={beer.id} saveDescription={saveDescription} beerDescription={beer.description}/>
        <DeleteButton id={beer.id} deleteHandler={deleteHandler} />
      </li>
    );
  });

  return (
    <div>
      <ul>
        { beerListItems }
      </ul>
    </div>
  );
}

BeerList.props = {
  beers: React.PropTypes.array.isRequired,
  changeBeerRanking: React.PropTypes.func.isRequired,
  saveDescription: React.PropTypes.func.isRequired,
  deleteHandler: React.PropTypes.func.isRequired
}

export default BeerList;
