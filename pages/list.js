import Link from "next/link";

export default function List({ gamesList }) {
  // const [owners, setOwners] = useState([]);
  // useEffect(() => {
  //   async function loadData() {
  //     const response = await fetch('http://localhost:4001/vehicles');
  //     const gamesList = await response.json();
  //     setOwners(gamesList);
  //   }

  //   loadData();
  // }, []);

  return (
    <div>
      {gamesList.map((e, index) => (
        <div key={index}>
          <Link as={`/${e.category}/${e.game}`} href="/[category]/[game]">
            <a>
              Navigate to {e.category} and play {e.game}
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}

List.getInitialProps = async () => {
  const response = await fetch("http://localhost:4001/games");
  const gamesList = await response.json();
  return { gamesList: gamesList };
};
