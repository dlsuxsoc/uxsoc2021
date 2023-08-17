import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import NewButton from "../components/NewButton";
import Spinner from "../components/Spinner";
import SEO from "../components/seo";
import axios from "axios";
import Image from "next/image";

export default function Done() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const getRandomPokemon = async () => {
    setLoading(true);
    let randomNumber = Math.floor(Math.random() * 1015);

    let response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${randomNumber}`
    );

    setData(response.data);

    setLoading(false);
  };

  useEffect(() => {
    const getInitialData = async () => {
      let response = await axios.get("https://pokeapi.co/api/v2/pokemon/6");

      console.log(data);
      setData(response.data);
    };

    getInitialData();
  }, []);

  return (
    <Layout active={2}>
      <SEO title={"Tutorial | Components and Hooks"} />
      <div className="text-red-50 h-screen bg-green flex flex-col space-y-4 items-center justify-center">
        <div className="bg-white h-96 w-96 shadow-md rounded-md flex items-center justify-center">
          {data && !loading ? (
            <div className="flex items-center justify-center flex-col ">
              <img
                src={data.sprites.front_default}
                alt={data.name}
                className="w-32 h-32"
              />
              <h5 className="font-semibold text-xl capitalize">{data.name}</h5>
            </div>
          ) : (
            <Spinner size="xl" />
          )}
        </div>

        <NewButton loading={loading} onClick={getRandomPokemon}>
          Pokemon Randomizer
        </NewButton>
      </div>
    </Layout>
  );
}

//export async function getServerSideProps() {}
