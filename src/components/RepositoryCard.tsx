import type { repository } from "../typescript/interface/repository.interface";

import {
  Star,
  GitFork,
  ExternalLink,
} from "lucide-react";

interface RepositoryCardProps {
  repo: repository;
}

const RepositoryCard = ({
  repo,
}: RepositoryCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl px-5 py-3 shadow-md hover:shadow-xl transition duration-300 mb-5">
      
      {/* Repository Name */}
      <h3 className="text-2xl font-bold text-gray-800">
        {repo.name}
      </h3>

      {/* Description */}
      <p className="text-gray-600 mt-3 leading-7 min-h-[60px]">
        {repo.description || "No description available"}
      </p>

      {/* Stats */}
      <div className="flex items-center gap-6 mt-1">
        
        <div className="flex items-center gap-2 text-yellow-500">
          <Star size={20} />
          <span className="font-medium text-gray-700">
            {repo.stargazers_count}
          </span>
        </div>

        <div className="flex items-center gap-2 text-gray-500">
          <GitFork size={20} />
          <span className="font-medium text-gray-700">
            {repo.forks_count}
          </span>
        </div>
      </div>

      {/* Button */}
      <a
        href={repo.html_url}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-lg hover:bg-gray-800 transition duration-300"
      >
        <ExternalLink size={18} />
        View Repository
      </a>
    </div>
  );
};

export default RepositoryCard;