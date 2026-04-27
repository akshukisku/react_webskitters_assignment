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

    if (!username.trim()) return;

    setQuery(username);
  };

  const clearSearch = () => {
    setUsername("");
    setProfile(null);

    setRepos([]);
  };

  return (
    <div className="p-5 max-w-4xl mx-auto">
      {/* Search Form */}
      <form onSubmit={handleSubmit} className="flex gap-2 mb-5">
        <input
          type="text"
          placeholder="Enter GitHub Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border px-4 py-2 rounded-full w-full"
        />

        <button type="submit" className="border px-4 rounded">
          Search
        </button>

        <button
          type="button"
          onClick={clearSearch}
          className="border px-4 rounded"
        >
          Clear
        </button>
      </form>

      {/* Loading */}
      {loading && <p className="text-blue-500 font-semibold">Loading...</p>}

      {/* Error */}
      {isError && <p className="text-red-500 font-semibold">{isError}</p>}

      {/* Profile */}
      {!loading && profile && <ProfileCard profile={profile} />}

      {/* Repository */}
      {!loading && repos.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Repositories</h2>

          {repos.slice(0, 5).map((repo) => (
            <RepositoryCard key={repo.id} repo={repo} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Homepage;
