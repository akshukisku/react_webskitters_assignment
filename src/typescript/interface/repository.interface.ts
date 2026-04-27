export interface repository{
    name:string;
    description:string;
    stargazers_count:string;
    forks_count:string;
    html_url:string
    id:number;
}
export interface RepositoryCardint {
  repo: repository;
}