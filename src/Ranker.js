import React from 'react';

const Ranker = ({id, currentRanking, ranks, rankingHandler}) => {
  var optionList = ranks.map(function(e, i) {
        return <option key={i} value={e}>{e}</option>
      });

  return (
    <select defaultValue={currentRanking} data-record-id={id} onChange={rankingHandler}>
      { optionList }
    </select>
  )
}

Ranker.propTypes = {
  id: React.PropTypes.string.isRequired,
  ranks: React.PropTypes.array.isRequired,
  currentRanking: React.PropTypes.any.isRequired,
  rankingHandler: React.PropTypes.func.isRequired
}

export default Ranker;
