
import {GET_ARTICLE, GET_ARTICLES, GET_ARTICLES_BY_YEAR} from "./articlesQueries"
import {GET_EVENT, GET_EVENTS, GET_EVENTS_BY_YEAR} from "./eventQueries"
import {GET_PROJECT, GET_PROJECTS} from "./projectQueries"
export default class ContentfulApi {


    static async call(query, variables){
        let url = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_TOKEN}`
        const config = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.CONTENTFUL_CDA_TOKEN}`,
                "Content-Type": "application/json",

            },
            body: JSON.stringify({ query, input: variables })
        };


        try{
            const data = await fetch(url, config).then((res)=> res.json())
            return data
        }catch(e){
            console.error(e);
            throw new Error("Could not fetch Contentful Data")
        }
    }

    static async getArticlesByYear(offset, dateStart, dateEnd){
        const res = await this.call(GET_ARTICLES_BY_YEAR, {offset, dateStart, dateEnd})
        return res;
    }

    static async getArticles(offset){
        const res = await this.call(GET_ARTICLES, {offset});
        return res;
    }

    static async getArticle(slug){
        const res = await this.call(GET_ARTICLE, {slug});
        return res;
    }

    static async getEventsByYear(offset, dateStart, dateEnd){
        const res = await this.call(GET_EVENTS_BY_YEAR, {offset, dateStart, dateEnd})
        return res;
    }

    static async getEvents(offset){
        const res = await this.call(GET_EVENTS, {offset});
        return res;
    }

    static async getEvent(slug){
        const res = await this.call(GET_EVENT, {slug});
        return res;
    }

    static async getProjects(offset){
        const res = await this.call(GET_PROJECTS, {offset});
        return res;
    }

    static async getProject(slug){
        const res = await this.call(GET_PROJECT, {slug});
        return res;
    }




    
    
}