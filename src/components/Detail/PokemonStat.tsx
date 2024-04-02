import styled from "styled-components";

const PokemonStat = ({ stats }: { stats: number[] }) => {
  const statClassNames = [
    "체력",
    "공격력",
    "방어력",
    "특수 공격력",
    "특수 방어력",
    "스피드",
  ];

  const maxStatValue = 256;
  const normalizedStats = stats.map((stat) => (stat / maxStatValue) * 100);

  return (
    <PokemonStatStyle>
      {normalizedStats.map((stat, index) => (
        <div key={index} className="stat-container">
          <p className="stat-name">{statClassNames[index]}</p>
          <div className="stat-bar">
            <div className="stat-value" style={{ width: `${stat}%` }}></div>
          </div>
          <p className="stat-num">{stats[index]}</p>
        </div>
      ))}
    </PokemonStatStyle>
  );
};

const PokemonStatStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 100%;
  height: 100%;

  .stat-container {
    display: flex;
    align-items: center;
    margin-left: 25px;
    margin-bottom: 10px;
  }

  .stat-name {
    width: 120px;
    text-align: right;
    margin-right: 10px;
  }
  .stat-num {
    position: absolute;
    right: 49%;
  }
  .stat-bar {
    width: 200px;
    height: 20px;
    background-color: #ccc;
    border-radius: 10px;
    overflow: hidden;
  }

  .stat-value {
    height: 100%;
    background-color: #4caf50;
    text-align: center;
  }
`;

export default PokemonStat;
