import React, {Component} from 'react';

const postsUrl = '​https://restcountries.eu/rest/v2/all';
const usersUrl = '​https://jsonplaceholder.typicode.com/users';


class Main extends Component{

    loadPostsData = () => {
        fetch(postsUrl).then(resp =>{
            if(resp.ok)
                return resp.text();
            else
                throw new Error('Błąd sieci');
        }).then(country => {
            console.log('kraj:' +country);
        }).catch( err => {
            console.log('Błąd!', err);
        });
    };
    loadUsersData = () => {
        fetch(usersUrl).then(resp => resp.json()).then(obj => obj).catch( err => {
            console.log('Błąd!', err);
        });
    };
    howManyPosts = () => {
        const postsData = this.loadPostsData();
        const usersData = this.loadUsersData();
        console.log('posty: '+ postsData);
        console.log('userzy: '+ usersData);
    };

    render(){
        return(
            <section>
                <p>{this.loadPostsData()}</p>
                <p>no siema</p>
            </section>
        )
    }
}

export default Main;