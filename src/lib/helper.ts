import { PUBLIC_TAG_SUGGESTIONS } from '$env/static/public';
export const get_page = (searchParams: URLSearchParams)=>{
    const page_str = searchParams.get("page")
    return page_str ? Number(page_str) : 1
}

export const tag_serialize = (tags : string[]) =>{
    return tags.join(" ")
}

export const tag_deserialize = (tag_string : string)=>{
    let tags : string[];
    if(tag_string === ''){
        tags = []
    }
    else{
        tags = tag_string.split(' ')
    }
    return tags
}

export const get_tag_suggestions = ()=>{
    const suggestion_subset = PUBLIC_TAG_SUGGESTIONS
        .split('\n')
        .filter((line)=>line != "")

    const tag_split = suggestion_subset.map((tag_subset)=>(
        tag_subset.split(" ").filter((t)=>t != "")
    ))
    const tag_suggestions = tag_split.map((group)=>{
        const name = group[0]
        const tags = group.slice(1)
        return {
            name,
            tags
        }
    })
    return tag_suggestions
}