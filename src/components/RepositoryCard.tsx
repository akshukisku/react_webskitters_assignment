import type { repository } from "../typescript/interface/repository.interface";

interface RepositoryCardProps {
  repo: repository;
}

const RepositoryCard = ({
  repo,
}: RepositoryCardProps) => {
  return (
    <div className="border p-3 rounded mb-3 shadow">
      <h3 className="font-semibold text-lg">
        {repo.name}
      </h3>

      <p className="text-gray-600">
        {repo.description}
      </p>

      <div className="flex gap-4 mt-2">
        <p>
          ⭐ {repo.stargazers_count}
        </p>

        <p>
          🍴 {repo.forks_count}
        </p>
      </div>

      <a
        href={repo.html_url}
        target="_blank"
        className="text-blue-500 mt-2 inline-block"
      >
        View Repository
      </a>
    </div>
  );
};

export default RepositoryCard;