import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { request } from "../../api";
import imdb from "../../assets/logos/imdb.png";
import kinopoisk from "../../assets/logos/kinopoisk.png";
import translate from "translate";
import Movies from "../../components/movies/Movies";

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [similar, setSimilar] = useState([]);
  const [credits, setCredits] = useState(null);
  const [countries, setCountries] = useState([]);
  const [genres, setGenres] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [casts, setCasts] = useState([]);
  const navigate = useNavigate();
    
  useEffect(() => {
    request.get(`/movie/${id}`).then((res) => setData(res.data));
    request.get(`/movie/${id}/similar`).then((res) => setSimilar(res.data));
    request.get(`/movie/${id}/credits`).then((res) => setCredits(res.data));
  }, [id]);
  console.log(credits);

  useEffect(() => {
    const translateCountries = async () => {
      if (data?.production_countries) {
        const translated = await Promise.all(
          data.production_countries.map(async (country) => {
            const translatedName = await translate(country.name, "ru");
            return translatedName;
          })
        );
        setCountries(translated);
      }
    };

    translateCountries();

    const translateGenres = async () => {
      if (data?.genres) {
        const translated = await Promise.all(
          data.genres.map(async (genre) => {
            const translatedName = await translate(genre.name, "ru");
            return translatedName;
          })
        );
        setGenres(translated);
      }
    };
    translateGenres();

    const translateCrew = async () => {
      if (credits?.crew) {
        const translatedCrew = await Promise.all(
          credits.crew.map(async (member) => {
            if (member.job === "Director") {
              const translatedName = await translate(member.name, "ru");
              return translatedName;
            }
            return null;
          })
        );
        setJobs(translatedCrew.filter((name) => name !== null));
      }
    };
    translateCrew();

    const translateCasts = async () => {
      if (credits?.cast) {
        const casts = await Promise.all(
          credits.cast.map(async (member) => {
            const translatedCharacter = await translate(member.character, "ru");
            const translatedName = await translate(member.name, "ru");
            return {
              character: translatedCharacter,
              name: translatedName,
            };
          })
        );
        setCasts(casts);
      }
    };
    translateCasts();

    const translateOverviews = async () => {
      if (data?.overview) {
        const translatedOverview = await translate(data.overview, "ru");
        setData({ ...data, overview: translatedOverview });
      }
    };
    translateOverviews();
  }, [data]);
  console.log(data);
  console.log(casts);

  const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60; 
    return `${hours}ч ${remainingMinutes}м / ${minutes} минут`;
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="bg-secondary">
      <div className="flex flex-col items-center">
        <div className="w-[1360px] h-[640px] relative">
          <img
            className="w-full h-full object-cover rounded-xl"
            src={import.meta.env.VITE_IMAGE_URL + data?.backdrop_path}
            alt=""
          />
          <button
            onClick={() => navigate(-1)}
            className="w-14 h-14 flex items-center justify-center rounded-xl bg-secondary active:bg-primary transition duration-300 absolute top-3 left-3 opacity-80"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              className="w-6 h-6 stroke-primary active:stroke-secondary transition duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div class="mt-96 absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h1 class="text-2xl md:text-5xl font-bold mb-4">{data?.title}</h1>
            <p class="text-sm text-[#A1A1A1] md:text-lg mb-6">
              2024 • Комедия • 1ч 34мин • EN •
            </p>
            <button class="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-full shadow-lg">
              Купить билет
            </button>
          </div>
        </div>
        <div className="detail-list w-[380px] mt-12">
          <div className="first-buttons grid grid-cols-2">
            <button className="bg-[#111111] text-white py-4 px-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition-all">
              Билеты
            </button>

            <button className="bg-[#1D1D1D] text-primary py-4 px-2 rounded-lg text-sm font-semibold hover:bg-gray-700 transition-all">
              О Фильме
            </button>
          </div>
          <div className="second-buttons grid grid-cols-2 gap-4 mt-12">
            <button className="flex items-center justify-around border text-white border-[#111111] px-4  rounded-xl text-xl font-[900]">
              {((data?.vote_average / 100) * 90).toFixed(1)}
              <img className="w-20 h-16" src={imdb} alt="" />
            </button>
            <button className="flex items-center text-white justify-around border border-[#111111] px-4  rounded-xl text-xl font-[900]">
              {data?.vote_average?.toFixed(1)}
              <img className="w-20 h-16" src={kinopoisk} alt="" />
            </button>
          </div>
          <div className="Detali border-b pb-8 border-[#2D2D2D]">
            <h3 className="mt-12 text-white text-xl">Детали</h3>
            <div className="flex flex-wrap justify-between mt-6">
              <p className="text-sm text-[#A1A1A1]">Продолжительность</p>
              <p className="text-sm text-[#A1A1A1]">
                {" "}
                {formatTime(data?.runtime)}
              </p>
            </div>
            <div className="flex flex-wrap justify-between mt-4">
              <p className="text-sm text-[#A1A1A1]">Премьера</p>
              <p className="text-sm text-[#A1A1A1]">
                {new Date(data?.release_date).toLocaleDateString()}
              </p>
            </div>
            <div className="flex flex-wrap justify-between mt-4">
              <p className="text-sm text-[#A1A1A1]">Производство</p>
              <p className="text-sm text-[#A1A1A1]">
                {countries.join(", ")}
              </p>
            </div>
            <div className="flex flex-wrap justify-between mt-4">
              <p className="text-sm flex-1 text-[#A1A1A1]">Жанр</p>
              <p className="text-sm text-[#A1A1A1]">
                {genres.slice(0, 2).join(", ")}
              </p>
            </div>
            <div className="flex flex-wrap justify-between mt-4">
              <p className="text-sm text-[#A1A1A1]">Режиссер</p>
              <p className="text-sm text-[#A1A1A1]">
                {jobs.join(", ") == ""
                  ? "Майк Митчелл, Стефани Стайн"
                  : jobs.slice(0, 2).join(", ")}
              </p>
            </div>
          </div>
          <div className="Roli border-b pb-8 border-[#2D2D2D]">
            <h3 className="mt-12 text-white text-xl">В ролях</h3>
            {casts.slice(0, 5).map((member, index) => (
              <div key={index} className="flex flex-wrap justify-between mt-6">
                <p className="text-sm text-[#A1A1A1]">{member.name}</p>
                <p className="text-sm text-[#A1A1A1]">{member.character}</p>
              </div>
            ))}
          </div>
          <div className="Roli pb-6">
            <h3 className="mt-12 text-white text-xl">Сюжет</h3>
            <p className="mt-6 text-base text-[#A1A1A1]">{data?.overview}</p>
          </div>
          <button className="mt-6 mb-60 bg-primary w-full px-6 py-4 rounded-xl text-white">
            Купить билеты
          </button>
        </div>
      </div>

      <Movies isDetail={true} data={similar} />
    </div>
  );
};

export default Details;