import React, { useEffect, useState } from "react";

import { api } from "../lib/axiosInstance";

import type { profiledesc } from "../typescript/interface/username.interface";

import ProfileCard from "../components/ProfileCard";
import RepositoryCard from "../components/RepositoryCard";
import type { repository } from "../typescript/interface/repository.interface";

const Homepage = () => {
  const [username, setUsername] = useState("");

  const [profile, setProfile] = useState<profiledesc | null>(null);

  const [repos, setRepos] = useState<repository[]>([]);

  const [loading, setLoading] = useState(false);

  const [isError, setIsError] = useState<string | null>(null);

  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setLoading(true);
      setIsError(null);

      try {
        const userResponse = await api.get(query);

        const userRepos = await api.get(`${query}/repos`);

        setProfile(userResponse.data);

        setRepos(userRepos.data);
      } catch (error: any) {
        setIsError(`Username not Found`);
        setProfile(null);
        setRepos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuery(username);
  };

  const clearSearch = () => {
    setUsername("");
    setProfile(null);
    setRepos([]);
    setIsError(null)
  };

  return (
   <div className="min-h-screen bg-gray-100 py-10 px-4">
       {/* Search Form */}
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 mb-8"
    >
      <input
        type="text"
        placeholder="Enter GitHub Username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="flex-1 border border-gray-300 px-5 py-3 rounded-xl outline-none focus:ring-2 focus:ring-black"
      />

      <button
        type="submit"
        className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
      >
        Search
      </button>

      <button
        type="button"
        onClick={clearSearch}
        className="bg-red-500 text-white px-6 py-3 rounded-xl hover:bg-red-600 transition"
      >
        Clear
      </button>
    </form>

    {/* Loading */}
    {loading && (
      <div className="flex justify-center mb-5">
        <p className="text-blue-500 font-semibold text-lg animate-pulse">
          Loading...
        </p>
      </div>
    )}

    {/* Error */}
    {isError && (
      <div className="text-red-600">
        {isError}
      </div>
    )}

    {/* Profile */}
    {!loading && profile && (
      <div className="mb-10">
        <ProfileCard profile={profile} />
      </div>
    )}

    {/* Repository */}
    {!loading && repos?.length > 0 && (
      <div>
        <h2 className="text-2xl font-bold mb-5 border-b pb-2">
          Top Repositories
        </h2>

        <div className="grid gap-4">
          {repos.slice(0, 5).map((repo) => (
            <RepositoryCard key={repo.id} repo={repo} />
          ))}
        </div>
      </div>
    )}
</div>
  );
};

export default Homepage;
