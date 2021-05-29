import DetailedPage from "../components/detailsPage";

const DetailPage = ({ dataa }) => {
  return <DetailedPage data={dataa} />;
};

export default DetailPage;

export const getStaticPaths = async () => {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const data = await res.json();
  const paths = data.map((item) => {
    return {
      params: { id: item.name },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const data = await res.json();

  return {
    props: { dataa: data },
  };
};
