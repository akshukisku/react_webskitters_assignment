import type { profiledesc } from "../typescript/interface/username.interface";

interface ProfileCardProps {
  profile: profiledesc;
}

const ProfileCard = ({
  profile,
}: ProfileCardProps) => {
  return (
   <div className="bg-white shadow-lg rounded-2xl p-6 w-[700px] mx-auto border border-gray-200">
  
  <div className="flex items-start gap-6">
    
    {/* Avatar */}
    <img
      src={profile.avatar_url}
      alt={profile.login}
      className="w-32 h-32 rounded-full border-4 border-gray-100 shadow-md"
    />

    {/* Profile Info */}
    <div className="flex flex-col">
      <h2 className="text-3xl font-bold text-gray-800">
        {profile.name || profile.login}
      </h2>

      <p className="text-gray-500 text-lg mt-1">
        @{profile.login}
      </p>

      <p className="text-gray-600 mt-4 w-[420px] leading-7">
        {profile.bio || "No bio available"}
      </p>

      {/* Stats */}
      <div className="flex gap-10 mt-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-800">
            {profile.followers}
          </h3>
          <p className="text-gray-500">
            Followers
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-800">
            {profile.following}
          </h3>
          <p className="text-gray-500">
            Following
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-800">
            {profile.public_repos}
          </h3>
          <p className="text-gray-500">
            Repositories
          </p>
        </div>
      </div>

      {/* Button */}
      <a
        href={profile.html_url}
        target="_blank"
        rel="noreferrer"
        className="mt-6 w-fit px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition duration-300"
      >
        View GitHub Profile
      </a>
    </div>
  </div>
</div>
  );
};

export default ProfileCard;