import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ProfileGithub = (props) =>{
    const [repos, setRepos] = useState([])
    const clientId = "31d64130efcb45fcc8bc"
    const clientSecret = "a68badb083dd937b2756a2431eb8a197d9296683"
    const count = 20
    const sort = "created: asc"

    useEffect(() => {
        // axios.get(`https://api.github.com/users/${props.profile.github}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`)
        // .then(res => setRepos(res.data))
        // .catch(err => console.log(err))
        console.log(props.profile.github)
        const fetch = async () => {
           try {
                // const res = await axios.get(`https://api.github.com/users/${props.profile.github}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`)
                const res = await axios.get(`https://api.github.com/users/${props.profile.github}/repos`)
                setRepos(res.data)
           }catch(err) {
                console.log(err)
           }

        }
        fetch()

    }, [])

    const repoItems = repos.map((repo) => {
        return(
            <div key={repo.id} className="card card-body mb-2">
                <div className="row">
                    <div className="col-md-6">
                        <h4>
                            <a href={repo.html_url}>{repo.name}</a>
                        </h4>
                        <p>{repo.description}</p>
                    </div>
                    <div className="col-md-6">
                     <span className="mr-1">
                     <i className="fas fa-star"></i>: {repo.stargazers_count}
                     </span>
                     <span className="mr-1">
                     <i class="fas fa-eye"></i>: {repo.watchers_count}
                     </span>
                     <span>
                     <i className="fas fa-code-branch"></i>: {repo.forks_count}
                     </span>
                    </div>
                </div>
            </div>
        )
    })



    return (
        <div>
            {repoItems}
        </div>
        
    )
}

export default ProfileGithub