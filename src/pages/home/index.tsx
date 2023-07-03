import DataTable from "@cmp/DataTable";
import { User } from "@constants/GlobalTypes";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState<User[] | null>(null);
  useEffect(() => {
    axios
      .get("https://mocki.io/v1/3361b3fd-79ad-45c2-aba4-3ee66cc9230c")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return <>{data && <DataTable data={data} />}</>;
};

export default Home;
