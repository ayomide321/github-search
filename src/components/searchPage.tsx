import React, {useState, useEffect, ChangeEvent} from 'react';
import { Card } from './Card'


type GitHubResult = {
    id: number;
    login: string;
    html_url: string;
    avatar_url: string;
}

type GithubArray = {
    items: GitHubResult[]
}

const SearchPage = () => {
    const API_URL = 'https://api.github.com/search/users?q='
    const SORT_URL = '&sort=followers&order=desc'
    const API_TOKEN = 'ENTER TOKEN HERE'
    const [search, setSearch] = useState('');
    const [results, setResults] = useState<GithubArray>();


    useEffect(() => {fetchData()}, [search])
    useEffect(() => console.log(results), [results])

    const fetchData = async () => {
        if(!search) return null;
        return await fetch(API_URL + search + SORT_URL, {
            'headers': {
                'Authorization': `token ${API_TOKEN}`,
            }
        })
            .then(response => response.json())
            .then(data => {
                setResults(data);
            });
    } 


    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.currentTarget.value);
    };

    return (
        <>
        <div className = 'mainContent' style={{margin: '0 auto'}}>
            <h1>Search Github Users</h1>
            <input 
                placeholder='Github Name'
                onChange={onChange}
            />
            <ul style={{display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', margin:'0 auto', alignItems: 'stretch'}}>
                { results && results.items ? results!.items.map((result) => (
                    <li key={result.id} style={{listStyleType: 'none', display: 'inline-block'}}>
                        <Card name = {result.login} url = {result.html_url} profile={result.avatar_url} />
                    </li>
                )) : <h1 style={{display: 'flex', marginLeft:'220%'}}>No results</h1>
                }
            </ul>
        </div>
        </>
    );



}

export default SearchPage