import Link from "next/link";

export default function List({ ownersList }) {
  // const [owners, setOwners] = useState([]);
  // useEffect(() => {
  //   async function loadData() {
  //     const response = await fetch('http://localhost:4001/vehicles');
  //     const ownersList = await response.json();
  //     setOwners(ownersList);
  //   }

  //   loadData();
  // }, []);

  return (
    <div>
      {ownersList.map((e, index) => (
        <div key={index}>
          <Link as={`/${e.category}/${e.game}`} href="/[category]/[game]">
            <a>
              Navigate to {e.ownerName}'s {e.vehicle}
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}

List.getInitialProps = async () => {
  const response = await fetch("http://localhost:4001/categories");
  const ownersList = await response.json();
  return { ownersList: ownersList };
};
