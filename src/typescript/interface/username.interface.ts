export interface profiledesc {
    id:number
    bio:string;
    followeres:number;
    following:number;
    avatar_url:string;
    login:string;
    name:string
    public_repos:string;
    url:string;
    location:string;
    html_url:string
    followers:number
}

export interface ProfileCardint {
  profile: profiledesc;
}
