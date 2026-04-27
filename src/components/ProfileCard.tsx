import type { profiledesc } from "../typescript/interface/username.interface";

interface ProfileCardProps {
  profile: profiledesc;
}

const ProfileCard = ({
  profile,
}: ProfileCardProps) => {
  return (
    <div className="border p-4 rounded mb-5 shadow">
      <img
        src={profile.avatar_url}
        alt={profile.login}
        className="w-24 h-24 rounded-full"
      />

      <h2 className="text-xl font-bold mt-2">
        {profile.name}
      </h2>

      <p className="text-gray-600">
        {profile.bio}
      </p>

      <div className="flex gap-4 mt-3">
        <p>
          Followers: {profile.followers}
        </p>

        <p>
          Following: {profile.following}
        </p>
      </div>

      <a
        href={profile.html_url}
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-4 text-blue-500"
      >
        View Profile
      </a>
    </div>
  );
};

export default ProfileCard;