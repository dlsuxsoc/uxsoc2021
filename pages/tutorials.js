import React, { useState, useEffect } from "react";

import BagongButton from "../components/BagongButton";
import Layout from "../components/Layout/Layout";
import Spinner from "../components/Spinner";
import SEO from "../components/seo";
import axios from "axios";

export default function Tutorials() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [counter, setCounter] = useState(0);

  const getRandomPokemon = async () => {
    setLoading(true);

    let randomNumber = Math.floor(Math.random() * 1015 + 1);
    let response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${randomNumber}`
    );
    setData(response.data);
    setLoading(false);
  };

  // on first render, this runs
  useEffect(() => {
    const getInitialPokemon = async () => {
      setLoading(true);
      let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/6`);
      setData(response.data);
      setLoading(false);
    };

    getInitialPokemon();
  }, []);

  // if one of the values of the dependency array changes, run the function inside
  useEffect(() => {
    setCounter((val) => val + 1);
  }, [data]);

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  return (
    <Layout active={2}>
      <SEO title={"Tutorial | Components and Hooks"} />
      <div className="text-red-50 h-screen bg-green flex flex-col space-y-4 items-center justify-center">
        <div className="w-96 h-96 rounded-md shadow-md bg-white flex flex-col items-center justify-center text-black text-center">
          Counter: {counter}
          {data ? (
            <div>
              <img src={data.sprites.front_default} className="h-32 w-32" />
              <h3 className="capitalize">{data.name}</h3>
            </div>
          ) : (
            <Spinner />
          )}
        </div>

        <BagongButton loading={loading} onClick={getRandomPokemon}>
          Pokemon Randomizer
        </BagongButton>
      </div>
    </Layout>
  );
}
