import { useRouter } from "next/router";

export default function game({ gamesList }) {
  const router = useRouter();

  return <pre>{gamesList[0]}</pre>;
}
game.getInitialProps = async (ctx) => {
  if (!ctx.req) {
    return { gamesList: [] };
  }
  const { query } = ctx;
  const response = await fetch(
    `http://localhost:4001/categories?category=${query.category}&game=${query.game}`
  );
  const gamesList = await response.json();
  return { gamesList: gamesList };
};
